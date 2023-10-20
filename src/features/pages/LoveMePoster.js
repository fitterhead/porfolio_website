import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function LoveMePoster() {
  /* ------------------------------- import hook ------------------------------ */
  const navigate = useNavigate();

  /* ---------------------- create chuyen route function ---------------------- */
  const handleProject = () => navigate("/loveme");
  return (
    <Grid
      item
      xs={12}
      onClick={() => handleProject()}
      style={{
        backgroundImage: `url('/loveme.png')`,
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
        onClick={() => handleProject()}
        className="responsive-heading"
        sx={{ paddingBottom: "0.5rem", color: "white" }}
      >
        Experiental poster for a song, 2017
      </Typography>
    </Grid>
  );
}

export default LoveMePoster;
