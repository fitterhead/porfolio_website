import React from "react";
import { AppBar, Box, Button, Container, Divider, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { projectOrder, projects } from "../data/projects";

function MainHeader() {
  const { pathname } = useLocation();
  const [anchor, setAnchor] = React.useState(null);
  const closeMenu = () => setAnchor(null);
  React.useEffect(() => setAnchor(null), [pathname]);
  const isProject = projectOrder.some((key) => projects[key].path === pathname);

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "rgba(250,247,242,0.95)", backdropFilter: "blur(14px)", color: "#050203", borderBottom: "1px solid rgba(5,2,3,0.1)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: { xs: 1.5, md: 2 }, gap: 2, justifyContent: "space-between" }}>
          <Typography component={Link} to="/" aria-label="Phi Nguyen — home" variant="logo" sx={{ textDecoration: "none", flexShrink: 0 }}>
            Phi <br />Nguyen
          </Typography>
          <Box component="nav" aria-label="Main navigation" sx={{ display: "flex", alignItems: "center", gap: { xs: 0.75, sm: 2, md: 3 } }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NavLink to="/" end className={`nav-link${isProject ? " section-active" : ""}`}>Work</NavLink>
              <Button id="project-menu-button" aria-label="Browse projects" aria-controls={anchor ? "project-menu" : undefined} aria-haspopup="true" aria-expanded={Boolean(anchor)} onClick={(event) => setAnchor(event.currentTarget)} sx={{ minWidth: 44, minHeight: 44, p: 0, color: "inherit" }}>
                <KeyboardArrowDownRoundedIcon sx={{ transform: anchor ? "rotate(180deg)" : "none", transition: "transform 180ms" }} />
              </Button>
            </Box>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <a href="mailto:xuanphiart@gmail.com" className="nav-link">Contact <span aria-hidden="true">↗</span></a>
          </Box>
          <Menu id="project-menu" anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenu} MenuListProps={{ "aria-labelledby": "project-menu-button" }} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }} PaperProps={{ sx: { mt: 1, borderRadius: 2, width: { xs: "calc(100vw - 32px)", sm: 380 }, maxHeight: "min(70vh, 560px)", border: "1px solid rgba(5,2,3,0.12)", backgroundColor: "#faf7f2", boxShadow: "0 16px 48px rgba(5,2,3,0.12)" } }}>
            <MenuItem component={Link} to="/" onClick={closeMenu} selected={pathname === "/"} sx={{ minHeight: 48 }}>All projects</MenuItem>
            <Divider />
            {projectOrder.map((key) => (
              <MenuItem key={key} component={Link} to={projects[key].path} onClick={closeMenu} selected={pathname === projects[key].path} aria-current={pathname === projects[key].path ? "page" : undefined} sx={{ py: 1.5, whiteSpace: "normal", fontFamily: "NeueMontreal-Book", fontSize: "1rem" }}>
                {projects[key].title}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainHeader;
