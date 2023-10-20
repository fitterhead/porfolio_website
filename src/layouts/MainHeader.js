import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const pages = ["About"];

function MainHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /* ------------------------------- import hook ------------------------------ */
  const navigate = useNavigate();

  /* ---------------------- create chuyen route function ---------------------- */
  const handleProject = () => navigate("/");
  const handleAbout = () => navigate("about");

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
        <Toolbar disableGutters sx={{ alignItems: "flex-start" }}>
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
              display: {
                xs: "flex",
                //  md: "none"
              },
              justifyContent: "flex-end",
            }}
          >
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              padding="0rem"
            > */}
            {/* <MenuIcon /> */}
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => handleAbout()}
              variant="menu"
            >
              About
            </Typography>
            {/* </IconButton> */}
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  // onClick={() => handlePage(page)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          {/* <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={() => handlePage(page)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Typography sx={{ fontSize: "14px" }} variant="body1">
                  {page}
                </Typography>
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainHeader;
