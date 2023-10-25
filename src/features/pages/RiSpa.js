import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function RiSpa() {
  /* ------------------------------- import hook ------------------------------ */
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  /* ---------------------- create chuyen route function ---------------------- */
  const handleProject = () => navigate("/rispa");

  return (
    <Grid
      item
      xs={12}
      onClick={() => handleProject()}
      style={{
        backgroundImage: `url('/RiSpa.png')`,
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
      {/* Content for the first Grid item */}
      <Typography
        variant="h1"
        align="center"
        className="responsive-heading3"
        sx={{
          paddingBottom: "0.5rem",
          opacity: isHovered ? 1 : 0,
          filter: `blur(${isHovered ? 0 : 15}px)`, // Apply blur only when not hovered
          transition: "opacity 0.5s ease, filter 0.5s ease", // Slower transition (0.5s duration)
        }}
        onClick={() => handleProject()}
      >
        Branding design for a spa in Tokyo, 2021
      </Typography>
    </Grid>
  );
}

export default RiSpa;
