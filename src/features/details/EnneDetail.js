import React from "react";
import { Container, Grid, Typography } from "@mui/material";
function EnneDetail() {
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
          padding: "3rem",
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
          Enne Homestay
        </Typography>
        <Typography
          variant="h2"
          align="center"
          className="responsive-heading"
          sx={{ paddingBottom: "0.5rem" }}
        >
          "én.nè" encapsulates the unique identity of my guest house nestled in
          the heart of Da Lat, Vietnam. Drawing inspiration from the profound
          Japanese concept of Ma (間), which explores the art of negative space,
          my logo embodies simplicity and harmony. <br />
          The name "én.nè" carries a delightful wordplay, bearing dual meanings
          in Vietnamese. Translated, it whimsically signifies "swallow is here,"
          paying homage to the graceful bird's presence. Additionally, it
          seamlessly transforms into "Enne" in English, blending cultures within
          the very essence of my identity.
          <br /> My logo is meticulously crafted, with the accents "`" artfully
          stylized into the shape of a branch. This elegant detail mirrors the
          enchanting natural surroundings of my guest house, perched atop a hill
          in Da Lat. Surrounded by verdant forests, my space offers a tranquil
          retreat, where guests can immerse themselves in nature's embrace and
          find solace in the serene ambiance. <br />
          At "én.nè," I embrace the beauty of simplicity, weaving together the
          essence of Ma and the playful nuances of language to create a unique,
          inviting atmosphere. With a focus on understated elegance and a deep
          appreciation for the natural world, my guest house promises a
          memorable stay for travelers seeking a tranquil refuge in the heart of
          Da Lat.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/176275299_171977854781631_8918987905806575029_n.jpg')`,
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
          backgroundImage: `url('/enne_presentation-02.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "2499/1406",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/enne_presentation-03.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "2499/1406",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/enne_presentation-04.png')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "2499/1406",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/Frame 11.png')`,
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
          backgroundImage: `url('/plate_2.jpg')`,
          backgroundPosition: "cover",
          backgroundSize: "100% ",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          aspectRatio: "1599/1101",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/Frame 12.png')`,
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

export default EnneDetail;
