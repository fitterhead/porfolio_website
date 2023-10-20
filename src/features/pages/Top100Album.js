import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Top100Album() {
  /* ------------------------------- import hook ------------------------------ */
  const navigate = useNavigate();

  /* ---------------------- create chuyen route function ---------------------- */
  const handleProject = () => navigate("/top100");

  return (
    <Grid
      item
      xs={12}
      onClick={() => handleProject()}
      style={{
        backgroundImage: `url('/top100.png')`,
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
        onClick={() => handleProject()}
        align="center"
        className="responsive-heading"
        sx={{ paddingBottom: "0.5rem" }}
      >
        An e-commerce music website, 2023
      </Typography>
    </Grid>
  );
}

export default Top100Album;
