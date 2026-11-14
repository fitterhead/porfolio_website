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
            {project.year && <Typography component="p" variant="h3"><time dateTime={String(project.year)}>{project.year}</time></Typography>}
            {project.description.map((paragraph) => (
              <Typography component="p" key={paragraph} variant="h2" sx={{ maxWidth: "1100px" }}>
                {paragraph}
              </Typography>
            ))}
            {project.disciplines && (
              <Box sx={{ pt: 3 }}>
                <Typography component="h2" variant="h3" sx={{ mb: 1 }}>DISCIPLINES</Typography>
                <Typography component="p" variant="h3">{project.disciplines.join(" · ")}</Typography>
              </Box>
            )}
          </Stack>
        </Reveal>

        <Stack spacing={{ xs: 2, md: 3 }}>
          {galleryGroups.map((group, groupIndex) => (
            <Box key={group.join("-")} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: group.length === 2 ? "repeat(2, minmax(0, 1fr))" : "1fr" }, gap: { xs: 2, md: 3 } }}>
              {group.map((image) => (
                <Box component="figure" key={image} sx={{ m: 0, minWidth: 0 }}>
                <Box
                  component="img"
                  className="project-image"
                  {...imageProps(image, group.length === 2 ? "(max-width: 900px) 100vw, (max-width: 1536px) 50vw, 768px" : undefined)}
                  alt={`${project.title} preview ${project.media.indexOf(image) + 1}`}
                  loading={groupIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                  sx={{ display: "block", width: "100%", height: "auto", minHeight: "1px" }}
                />
                {project.captions?.[image] && (
                  <Typography component="figcaption" variant="h3" sx={{ px: { xs: 2, md: 3 }, pt: 1.5, pb: 2 }}>
                    {project.captions[image]}
                  </Typography>
                )}
                </Box>
              ))}
            </Box>
          ))}
        </Stack>

        {project.credits && (
          <Box component="section" aria-label="Project credits" sx={{ px: { xs: 2, md: 6 }, py: { xs: 6, md: 10 } }}>
            <Typography component="h2" variant="h3" sx={{ mb: 3 }}>PROJECT CREDITS</Typography>
            <Box component="dl" sx={{ m: 0 }}>
              {project.credits.map(([role, name]) => (
                <Box key={role} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(240px, 1fr) 2fr" }, gap: 0.5, mb: 2 }}>
                  <Typography component="dt" variant="h3">{role}</Typography>
                  <Typography component="dd" variant="h3" sx={{ m: 0 }}>{name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

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
