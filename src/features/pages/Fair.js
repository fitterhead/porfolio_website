import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Fair() {
  /* ------------------------------- import hook ------------------------------ */
  const navigate = useNavigate();

  /* ---------------------- create chuyen route function ---------------------- */
  const handleProject = () => navigate("/fair");
  return (
    <Grid
      item
      xs={12}
      onClick={() => handleProject()}
      style={{
        backgroundImage: `url('/fair.png')`,
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
        sx={{ paddingBottom: "0.5rem", color: "white" }}
      >
        Posters for a Local Goods Conference in HCMC, 2023
      </Typography>
    </Grid>
  );
}

export default Fair;
