import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function ProjectNavigation({ previousProject, nextProject }) {
  return createPortal(
    <nav className="project-edge-nav" aria-label="Project navigation">
      {[["previous", previousProject, ArrowBackRoundedIcon], ["next", nextProject, ArrowForwardRoundedIcon]].map(([direction, project, Icon]) => (
        <Link
          key={direction}
          to={project.path}
          className={`project-edge project-edge-${direction}`}
          aria-label={`${direction === "previous" ? "Previous" : "Next"}: ${project.title}`}
          onPointerMove={(event) => event.currentTarget.style.setProperty("--pointer-y", `${event.clientY}px`)}
        >
          <span className="project-edge-label">
            <Icon />
            <span>{direction === "previous" ? "Previous project" : "Next project"}</span>
          </span>
        </Link>
      ))}
    </nav>,
    document.body
  );
}
