import React from "react";
import { Container, Grid, Typography } from "@mui/material";
function RiSpaDetail() {
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
          aspectRatio: "2038/1359",
        }}
      >
        {/* Content for the first Grid item */}
        <Typography
          variant="h1"
          align="center"
          className="responsive-heading"
          sx={{ paddingBottom: "0.5rem" }}
        >
          Ri Spa
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/RiSpa.png')`,
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
          backgroundImage: `url('/Ri_beauty-01.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/947",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/Ri_beauty-03.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/1091",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/4.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/1091",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/poster_.jpg')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/1091",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/Frame 8.png')`,
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
          backgroundImage: `url('/Frame 9.png')`,
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

export default RiSpaDetail;
