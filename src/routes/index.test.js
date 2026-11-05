import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import Router from "./index";
import { projectOrder, projects } from "../data/projects";

jest.mock("../components/Reveal", () => ({
  __esModule: true,
  default: ({ children }) => <>{children}</>,
}));

function Location() {
  return <output data-testid="location">{useLocation().pathname}</output>;
}

function open(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Router />
      <Location />
    </MemoryRouter>
  );
}

afterEach(cleanup);

test.each(projectOrder)("old project %s still renders its content", (key) => {
  const project = projects[key];
  open(project.path);
  expect(screen.getByRole("heading", { name: project.title })).toBeTruthy();
  expect(screen.getAllByRole("img").length).toBe(project.media.length);
});

test.each([
  ["Terroni Summer Menu 2025", "/summer-menu-2025"],
  ["Terroni Spring/Summer Menu 2026", "/summer-2026"],
  ["Window graphics for Terroni", "/terroni-la-window-screen"],
  ["Apron design for Terroni", "/apron"],
  ["Tote bag design for Terroni", "/tote-bag"],
  ["Serving tray design", "/tray"],
])("homepage card %s navigates to its page", (title, path) => {
  open("/");
  fireEvent.click(screen.getByRole("link", { name: new RegExp(title) }));
  expect(screen.getByTestId("location").textContent).toBe(path);
});

test("unknown addresses offer a way home", () => {
  open("/missing-project");
  expect(screen.getByRole("heading", { name: "Page not found" })).toBeTruthy();
  expect(screen.getByRole("link", { name: "Back to projects" }).getAttribute("href")).toBe("/");
});

test("Curtain stays unpublished across homepage, menu and direct route", () => {
  const view = open("/");
  expect(screen.queryByRole("link", { name: /Curtain/i })).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: "Browse projects" }));
  expect(screen.queryByRole("menuitem", { name: /Curtain/i })).toBeNull();
  view.unmount();
  open("/curtain");
  expect(screen.getByRole("heading", { name: "Page not found" })).toBeTruthy();
});

test("project navigation skips Curtain and provides visible links", () => {
  open("/summer-2026");
  expect(screen.getByRole("link", { name: /Next: Terroni Summer Menu 2025/ }).getAttribute("href")).toBe("/summer-menu-2025");
  expect(screen.getByRole("link", { name: /Previous: Bombee Honey/ }).getAttribute("href")).toBe("/bombee");
  expect(screen.getAllByRole("link", { name: "All projects" }).length).toBe(2);
});
