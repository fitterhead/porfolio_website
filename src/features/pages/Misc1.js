import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Misc1() {
  /* ------------------------------- import hook ------------------------------ */
  const navigate = useNavigate();

  /* ---------------------- create chuyen route function ---------------------- */
  const handleProject = (projectId) => navigate(`/${projectId}`);
  return (
    <Grid
      container
      xs={12}
      style={{
        // backgroundImage: `url('/top100.png')`,
        backgroundColor: "#7CE02E",
        backgroundPosition: "center",
        backgroundSize: "100% ",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: "2038/1359",
      }}
    >
      <Grid
        item
        xs={6}
        style={{
          backgroundImage: `url('/Screenshot 2023-10-13 at 08.50.36.png')`,
          backgroundColor: "red",
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
          onClick={() => handleProject("consumerism")}
          className="responsive-heading"
          sx={{ paddingBottom: "0.5rem" }}
        >
          A conceptual project about Consumerism, 2020.
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          backgroundImage: `url('/Screenshot 2023-10-13 at 08.50.19.png')`,
          backgroundColor: "red",
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
          onClick={() => handleProject("beyond")}
          sx={{ paddingBottom: "0.5rem" }}
        >
          Motion project for a gallery's podcast, 2021.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/Screenshot 2023-10-13 at 09.41.51.png')`,
          backgroundColor: "red",
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
          onClick={() => handleProject("okcomputer")}
          sx={{ paddingBottom: "0.5rem" }}
        >
          Redesign of Radiohead's album, OK Computer , 2019
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Misc1;