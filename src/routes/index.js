import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import About from "../features/details/About";
import ProjectDetailPage from "../components/ProjectDetailPage";
import { projectOrder, projects } from "../data/projects";
import NotFoundPage from "../pages/NotFoundPage";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {projectOrder.map((key) => (
          <Route key={key} path={projects[key].path.slice(1)} element={<ProjectDetailPage projectKey={key} />} />
        ))}
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
