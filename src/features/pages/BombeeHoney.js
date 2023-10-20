import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function BombeeHoney() {
      /* ------------------------------- import hook ------------------------------ */
      const navigate = useNavigate();

      /* ---------------------- create chuyen route function ---------------------- */
      const handleProject = () => navigate("/bombee");
  return (
    <Grid
      item
      xs={12}
      onClick={() => handleProject()}
      style={{
        backgroundImage: `url('/bombee.png')`,
        backgroundPosition: "center",
        backgroundSize: "100% ",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        aspectRatio: "2038/1359",
      }}
    >
      {/* Content for the first Grid item */}
      <Typography
        variant="h1"
        align="center"
        className="responsive-heading"
        onClick={() => handleProject()}
        sx={{ paddingBottom: "0.5rem",color:"white" }}
      >
        Branding design for a honey brand in Tokyo, 2022
      </Typography>
    </Grid>
  );
}

export default BombeeHoney;
