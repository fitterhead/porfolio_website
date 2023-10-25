import React from "react";
import { Container, Grid, Typography } from "@mui/material";
function Beyond() {
  const isSmallScreen = window.innerWidth < 600;
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0rem", // Set default padding
        "@media (min-width: 600px)": {
          padding: "0rem", // Set padding to 0 when minWidth is 600px
        },
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: isSmallScreen ? "1rem" : "3rem", // Adjust padding based on screen width
          // aspectRatio: "2038/1359",
        }}
      >
        {/* Content for the first Grid item */}
        <Typography
          variant="h1"
          align="center"
          className="responsive-heading"
          sx={{ paddingBottom: "0.5rem" }}
        >
          Beyond The Frame
        </Typography>
        <Typography
          variant="h2"
          align="center"
          className="responsive-heading"
          sx={{ paddingBottom: "0.5rem" }}
        >
          Beyond the Frame is a logo for a new podcast program from Propeller
          Gallery, a collaboration between me and the artist Doris Purchase.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/Frame 15.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "2038/1359",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/Frame 31.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "2038/1359",
        }}
      ></Grid>
    </Container>
  );
}

export default Beyond;
