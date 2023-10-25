import React from "react";
import { Container, Grid, Typography } from "@mui/material";
function BombeeDetail() {
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
          Bombee Honey
        </Typography>
        <Typography
          variant="h2"
          align="center"
          className="responsive-heading"
          sx={{ paddingBottom: "0.5rem" }}
        >
          Identity design for an upcoming Honey brand in Japan
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/bombee.png')`,
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
          backgroundImage: `url('/bombeez_presentation-02.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/899",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/bombeez_presentation-04.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/899",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/bombeez_presentation-06.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/899",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/cup.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/1119",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/bombeez_presentation-05.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/899",
        }}
      ></Grid>
    </Container>
  );
}

export default BombeeDetail;
