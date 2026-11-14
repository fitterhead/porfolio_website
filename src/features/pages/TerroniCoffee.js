import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { imageProps } from "../../utils/images";
import { projects } from "../../data/projects";

export default function TerroniCoffee({ projectKey = "terronicoffee" }) {
  const project = projects[projectKey];
  return (
    <Box component={Link} to={project.path} className="project-card-link" sx={{
      display: "block", position: "relative",
      "&:hover .coffee-title, &:focus-visible .coffee-title": { opacity: 1, filter: "blur(0)" },
    }}>
      <Box component="img" {...imageProps(project.media[0])} alt={project.title}
        fetchPriority={projectKey === "terronicoffee" ? "high" : "auto"} loading={projectKey === "terronicoffee" ? "eager" : "lazy"} sx={{ display: "block", width: "100%", height: "auto" }} />
      <Typography className="coffee-title" variant="h1" component="h2" sx={{
        position: "absolute", bottom: 0, left: 0, right: 0, p: 2, textAlign: "center",
        color: "white", background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
        opacity: { xs: 1, md: 0 }, filter: { xs: "none", md: "blur(15px)" },
        transition: "opacity 0.5s ease, filter 0.5s ease",
      }}>{project.title} · {project.year}</Typography>
    </Box>
  );
}
