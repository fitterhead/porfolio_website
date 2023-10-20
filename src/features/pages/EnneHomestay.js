import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function EnneHomestay() {
    /* ------------------------------- import hook ------------------------------ */
    const navigate = useNavigate();

    /* ---------------------- create chuyen route function ---------------------- */
    const handleProject = () => navigate("/enne");
  return (
    <Grid
      item
      xs={12}
      onClick={() => handleProject()}
      style={{
        backgroundImage: `url('/enne.png')`,
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
      onClick={() => handleProject()}
        variant="h1"
        align="center"
        className="responsive-heading"
        sx={{ paddingBottom: "0.5rem" }}
      >
        Branding design for a cottage in Dalat, Vietnam, 2021
      </Typography>
    </Grid>
  );
}

export default EnneHomestay;
