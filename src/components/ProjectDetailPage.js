import ProjectNavigation from "./ProjectNavigation";
import { imageProps, imageRatio } from "../utils/images";
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
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { getAdjacentProjects, getProjectByKey } from "../data/projects";

function ProjectDetailPage({ projectKey }) {
  const project = getProjectByKey(projectKey);
  const { previousProject, nextProject } = getAdjacentProjects(projectKey);

  if (!project) {
    return null;
  }

  const isPortrait = (image) => imageRatio(image) < 0.9;
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
      <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
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
            <Button component={Link} to="/" startIcon={<ArrowBackRoundedIcon />} sx={{ color: "#050203" }}>All projects</Button>
            <Typography variant="h1">{project.title}</Typography>
            {project.sectionHeadings ? (
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" }, gap: { xs: 3, md: 5 }, textAlign: "left", width: "100%", maxWidth: "1200px", pt: 3 }}>
                {project.description.map((paragraph, index) => (
                  <Box component="section" key={paragraph}>
                    <Typography component="h2" sx={{ fontFamily: "NeueMontreal-Book", fontSize: "1.15rem", mb: 1.5 }}>{project.sectionHeadings[index]}</Typography>
                    <Typography component="p" sx={{ fontFamily: "NeueMontreal-Book", fontSize: "1rem", lineHeight: 1.75 }}>{paragraph}</Typography>
                  </Box>
                ))}
              </Box>
            ) : project.description.map((paragraph) => (
              <Typography component="p" key={paragraph} sx={{ fontFamily: "NeueMontreal-Book", fontSize: { xs: "1.05rem", md: "1.3rem" }, lineHeight: 1.7, maxWidth: "850px" }}>
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Reveal>

        <Stack spacing={{ xs: 2, md: 3 }}>
          {galleryGroups.map((group, groupIndex) => (
            <Box key={group.join("-")} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: group.length === 2 ? "repeat(2, minmax(0, 1fr))" : "1fr" }, gap: { xs: 2, md: 3 } }}>
              {group.map((image) => (
                <Box
                  key={image}
                  component="img"
                  {...imageProps(image, group.length === 2 ? "(max-width: 900px) 100vw, (max-width: 1536px) 50vw, 768px" : undefined)}
                  alt={`${project.title} preview ${project.media.indexOf(image) + 1}`}
                  loading={groupIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                  sx={{ display: "block", width: "100%", height: "auto", minHeight: "1px" }}
                />
              ))}
            </Box>
          ))}
        </Stack>

        <nav className="project-touch-nav" aria-label="More projects">
          <Button component={Link} to={previousProject.path} startIcon={<ArrowBackRoundedIcon />}>Previous</Button>
          <Button component={Link} to="/">All projects</Button>
          <Button component={Link} to={nextProject.path} endIcon={<ArrowForwardRoundedIcon />}>Next</Button>
        </nav>
      </Container>
    </Box>
  );
}

export default ProjectDetailPage;
