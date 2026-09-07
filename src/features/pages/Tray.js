import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Tray() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleProject = () => navigate("/tray");

  return (
    <Grid
      item
      xs={12}
      onClick={handleProject}
      style={{
        backgroundImage: "url('/tray/Tray1.png')",
        backgroundPosition: "center",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        aspectRatio: "2038/1359",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Typography
        variant="h1"
        align="center"
        onClick={handleProject}
        sx={{
          paddingBottom: "0.5rem",
          color: "white",
          opacity: isHovered ? 1 : 0,
          filter: isHovered ? "blur(0)" : "blur(15px)",
          transition: "opacity 0.5s ease, filter 0.5s ease",
        }}
      >
        Serving tray design for Forno Terroni LA, 2025
      </Typography>
    </Grid>
  );
}

export default Tray;
