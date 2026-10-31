import { useBackgroundImage } from "../../utils/images";
import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SummerMenu2025() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleProject = () => navigate("/summer-menu-2025");

  const cover = useBackgroundImage("/menu2025/2025Menu-1.png", false);

  return (
    <Grid
      item
      xs={12}
      onClick={handleProject}
      {...cover}
      style={{
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
        Terroni Summer Menu 2025
      </Typography>
    </Grid>
  );
}

export default SummerMenu2025;
