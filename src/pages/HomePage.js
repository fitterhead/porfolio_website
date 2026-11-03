import React from "react";
import { Link } from "react-router-dom";
import { projects, projectOrder } from "../data/projects";
import { imageProps } from "../utils/images";
import Reveal from "../components/Reveal";

const selected = ["terronilawindow", "saigonzine", "summer2026", "rispa", "apron", "enne", "totebag", "tray"];
const cardLabels = {
  terronilawindow: "Window graphics for Terroni",
  summer2026: "Terroni Spring/Summer Menu 2026",
  apron: "Apron design for Terroni",
  totebag: "Tote bag design for Terroni",
  tray: "Serving tray design",
};

function HomePage() {
  return (
    <div className="portfolio-home">
      <section className="portfolio-intro" aria-labelledby="intro-title">
        <p className="eyebrow">Phi Nguyen · Designer & web developer</p>
        <h1 id="intro-title">Ideas made tangible.</h1>
        <p className="intro-copy">I work across brand identity, editorial and hospitality, bringing concepts into print, objects and digital experiences.</p>
        <div className="portfolio-actions">
          <a href="#selected-work">Explore selected work <span aria-hidden="true">↓</span></a>
          <Link to="/about">About my practice <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section id="selected-work" aria-labelledby="selected-title">
        <div className="section-heading"><h2 id="selected-title">Selected work</h2><p>Identity, editorial & objects</p></div>
        <div className="selected-grid">
          {selected.map((key, index) => {
            const project = projects[key];
            return (
              <Reveal key={key}>
                <Link className="selected-card project-card-link" to={project.path} aria-label={`${cardLabels[key] || project.title} — view project`}>
                  <div className="selected-image"><img {...imageProps(project.media[0], "(max-width: 700px) 100vw, 50vw")} alt={project.title} loading={index === 0 ? "eager" : "lazy"} decoding="async" /></div>
                  <div className="selected-caption"><h3>{project.title}</h3><span aria-hidden="true">↗</span></div>
                  <p>{project.teaser}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="more-work" aria-labelledby="more-title">
        <div className="section-heading"><h2 id="more-title">More work</h2><p>Further projects & explorations</p></div>
        {projectOrder.filter((key) => !selected.includes(key)).map((key) => (
          <Link className="archive-link" key={key} to={projects[key].path}>
            <span>{projects[key].title}</span><span aria-hidden="true">↗</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
export default HomePage;
