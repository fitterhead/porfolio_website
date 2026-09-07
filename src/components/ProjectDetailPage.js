import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal";
import { getAdjacentProjects, getProjectByKey } from "../data/projects";

function ProjectDetailPage({ projectKey }) {
  const navigate = useNavigate();
  const project = getProjectByKey(projectKey);
  const { previousProject, nextProject } = getAdjacentProjects(projectKey);
  const [hoveredSide, setHoveredSide] = React.useState(null);
  const [imageRatios, setImageRatios] = React.useState({});

  if (!project) {
    return null;
  }

  const handleImageLoad = (event, image) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth && naturalHeight) {
      setImageRatios((current) => ({ ...current, [image]: naturalWidth / naturalHeight }));
    }
  };

  const isPortrait = (image) => imageRatios[image] && imageRatios[image] < 0.9;
  const galleryGroups = [];
  for (let index = 0; index < project.media.length; index += 1) {
    const image = project.media[index];
    const nextImage = project.media[index + 1];
    if (isPortrait(image) && nextImage && isPortrait(nextImage)) {
      galleryGroups.push([image, nextImage]);
      index += 1;
    } else {
      galleryGroups.push([image]);
    }
  }

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate(previousProject.path)}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: { xs: 0, md: "11vw" },
          height: "100vh",
          zIndex: 20,
          cursor: "w-resize",
        }}
      />
      <Box
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate(nextProject.path)}
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: { xs: 0, md: "11vw" },
          height: "100vh",
          zIndex: 20,
          cursor: "e-resize",
        }}
      />

      <Button
        variant="outlined"
        startIcon={<ArrowBackRoundedIcon />}
        onClick={() => navigate(previousProject.path)}
        sx={{
          position: "fixed",
          top: "50%",
          left: { xs: 16, md: 24 },
          transform: "translateY(-50%)",
          zIndex: 21,
          borderColor: "#050203",
          borderRadius: "999px",
          color: "#050203",
          px: 2.5,
          py: 1.1,
          opacity: hoveredSide === "left" ? 1 : 0,
          pointerEvents: hoveredSide === "left" ? "auto" : "none",
          transition: "opacity 220ms ease, transform 220ms ease",
          display: { xs: "none", md: "inline-flex" },
          backgroundColor: "rgba(250, 247, 242, 0.92)",
          backdropFilter: "blur(10px)",
          transformOrigin: "center",
          ...(hoveredSide === "left"
            ? { transform: "translateY(-50%) translateX(0)" }
            : { transform: "translateY(-50%) translateX(-10px)" }),
        }}
      >
        Back
      </Button>

      <Button
        variant="contained"
        endIcon={<ArrowForwardRoundedIcon />}
        onClick={() => navigate(nextProject.path)}
        sx={{
          position: "fixed",
          top: "50%",
          right: { xs: 16, md: 24 },
          transform: "translateY(-50%)",
          zIndex: 21,
          backgroundColor: "#050203",
          borderRadius: "999px",
          color: "#faf7f2",
          px: 2.5,
          py: 1.1,
          opacity: hoveredSide === "right" ? 1 : 0,
          pointerEvents: hoveredSide === "right" ? "auto" : "none",
          transition: "opacity 220ms ease, transform 220ms ease",
          display: { xs: "none", md: "inline-flex" },
          "&:hover": {
            backgroundColor: "#1e1b18",
          },
          ...(hoveredSide === "right"
            ? { transform: "translateY(-50%) translateX(0)" }
            : { transform: "translateY(-50%) translateX(10px)" }),
        }}
      >
        Next
      </Button>

      <Container
        maxWidth="xl"
        sx={{
          px: "0 !important",
        }}
      >
        <Reveal delay={50}>
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 2, md: 6 },
              py: { xs: 6, md: 10 },
              textAlign: "center",
            }}
          >
            <Typography variant="h1">{project.title}</Typography>
            {project.description.map((paragraph) => (
              <Typography key={paragraph} variant="h2" sx={{ maxWidth: "1100px" }}>
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Reveal>

        <Stack spacing={{ xs: 2, md: 3 }}>
          {galleryGroups.map((group, groupIndex) => (
            <Box key={group.join("-")} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: group.length === 2 ? "repeat(2, minmax(0, 1fr))" : "1fr" }, gap: { xs: 2, md: 3 } }}>
              {group.map((image, imageIndex) => (
                <Box
                  key={image}
                  component="img"
                  src={image}
                  alt={`${project.title} preview ${groupIndex + imageIndex + 1}`}
                  loading={groupIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onLoad={(event) => handleImageLoad(event, image)}
                  sx={{ display: "block", width: "100%", height: "auto", minHeight: "1px" }}
                />
              ))}
            </Box>
          ))}
        </Stack>

        <Reveal delay={80}>
          <Stack
            spacing={2}
            sx={{
              px: { xs: 2, md: 6 },
              py: { xs: 5, md: 8 },
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ width: "100%", maxWidth: "720px", justifyContent: "center", display: { xs: "flex", md: "none" } }}
            >
              <Button
                variant="outlined"
                startIcon={<ArrowBackRoundedIcon />}
                onClick={() => navigate(previousProject.path)}
                sx={{
                  borderColor: "#050203",
                  borderRadius: "999px",
                  color: "#050203",
                  px: 3,
                  py: 1.25,
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={() => navigate(nextProject.path)}
                sx={{
                  backgroundColor: "#050203",
                  borderRadius: "999px",
                  color: "#faf7f2",
                  px: 3,
                  py: 1.25,
                  "&:hover": {
                    backgroundColor: "#1e1b18",
                  },
                }}
              >
                Next
              </Button>
            </Stack>

            <Typography variant="h3" sx={{ opacity: 0.72 }}>
              Next project: {nextProject.title}
            </Typography>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}

export default ProjectDetailPage;
