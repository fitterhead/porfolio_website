import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { projectOrder, projects } from "../data/projects";

function MainHeader() {
  const navigate = useNavigate();
  const [projectAnchorEl, setProjectAnchorEl] = React.useState(null);

  const handleProject = () => navigate("/");
  const handleAbout = () => navigate("about");
  const handleOpenProjectMenu = (event) => setProjectAnchorEl(event.currentTarget);
  const handleCloseProjectMenu = () => setProjectAnchorEl(null);
  const handleProjectNavigate = (path) => {
    navigate(path);
    handleCloseProjectMenu();
  };

  return (
    <AppBar
      position="sticky"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: "0.7rem", // Default padding
          "@media (min-width: 600px)": {
            paddingTop: "1.5rem", // Set padding to 1rem when minWidth is 600px or more
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => handleProject()}
            variant="logo"
          >
            Phi <br />
            Nguyen
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              gap: { xs: 2.5, md: 4 },
            }}
          >
            <Typography
              sx={{ cursor: "pointer", textTransform: "uppercase" }}
              onClick={() => handleAbout()}
              variant="menu"
            >
              About
            </Typography>
            <Button
              onClick={handleOpenProjectMenu}
              endIcon={<KeyboardArrowDownRoundedIcon />}
              sx={{
                p: 0,
                minWidth: 0,
                color: "#050203",
                textTransform: "uppercase",
                alignItems: "flex-start",
                "& .MuiButton-endIcon": {
                  ml: 0.5,
                },
              }}
            >
              <Typography variant="menu" sx={{ textTransform: "uppercase" }}>
                Project
              </Typography>
            </Button>
            <Menu
              anchorEl={projectAnchorEl}
              open={Boolean(projectAnchorEl)}
              onClose={handleCloseProjectMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  borderRadius: "18px",
                  minWidth: { xs: 240, md: 320 },
                  border: "1px solid rgba(5, 2, 3, 0.08)",
                  boxShadow: "0 18px 48px rgba(5, 2, 3, 0.12)",
                  backgroundColor: "rgba(255, 251, 246, 0.96)",
                  backdropFilter: "blur(14px)",
                },
              }}
            >
              {projectOrder.map((key) => (
                <MenuItem
                  key={key}
                  onClick={() => handleProjectNavigate(projects[key].path)}
                  sx={{
                    py: 1.25,
                    px: 2,
                    whiteSpace: "normal",
                    alignItems: "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "NeueMontreal-Book",
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {projects[key].title}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainHeader;
