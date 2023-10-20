import React from "react";
import { Container, Grid, Typography } from "@mui/material";
function SaigonZineDetail() {
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
          backgroundImage: `url('/covermockup.png')`,
          backgroundPosition: "cover",
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
      </Grid>
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
          The Un-Michelin Guide to Saigon food destinations
        </Typography>
        <Typography
          variant="h2"
          align="center"
          className="responsive-heading"
          sx={{ paddingBottom: "0.5rem" }}
        >
          A zine catering to foreign visitors, exploring Saigon's culinary
          delights through the discerning eyes of locals. Think of it as a more
          authentic, localized version of the Michelin Guide, sparking diverse
          opinions and conversations. I envision a modern layout using
          contemporary fonts, yet drawing inspiration from the color schemes and
          typography reminiscent of Vietnamese book covers from the 2000s. <br/>This
          fusion of modernity and nostalgia will create a visually captivating
          experience, capturing the essence of Saigon's rich culinary landscape.
          My zine will serve as a cultural bridge, guiding international
          travelers to hidden gems and beloved eateries cherished by the locals.
          <br/>Through vibrant visuals and engaging narratives, I aim to transport
          our readers into the heart of Saigon’s gastronomic journey, allowing
          them to savor not just the flavors but also the stories behind each
          dish. With every page, I'll unfold the city's culinary tapestry,
          inviting readers to embark on an unforgettable culinary adventure,
          curated by the people who know it best.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        style={{
          backgroundImage: `url('/3.jpeg')`,
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
          backgroundImage: `url('/4.jpeg')`,
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
          backgroundImage: `url('/2.jpeg')`,
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
          backgroundImage: `url('/7.jpeg')`,
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
          backgroundImage: `url('/8.jpeg')`,
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
          backgroundImage: `url('/9.jpeg')`,
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
          backgroundImage: `url('/A4 Magazine Mockup.jpeg')`,
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
          backgroundImage: `url('/11.jpeg')`,
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
          backgroundImage: `url('/12.jpg')`,
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
          backgroundImage: `url('/13.jpeg')`,
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
          backgroundImage: `url('/14.jpg')`,
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

export default SaigonZineDetail;
