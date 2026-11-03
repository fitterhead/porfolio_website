import { imageProps } from "../../utils/images";
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" style={{
     marginTop: "50px"
      }}>
      <Grid container spacing={2} alignItems="flex-start">
        {/* Image */}
        <Grid item xs={12} md={6}>
          <img
            {...imageProps("/81631351_2811445118914931_1487271570295488512_n.jpg", "(max-width: 900px) 100vw, 600px")}
            alt="Phi Nguyen"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>

        {/* Personal Information */}
        <Grid item xs={12} md={6}>
          <Box sx={{ px: { xs: 0, md: 3 }, pb: 5 }}>
            <Typography variant="h1" gutterBottom>
              Phi Nguyen
            </Typography>
            <Typography component="p" sx={{ fontFamily: "NeueMontreal-Book", fontSize: { xs: "1.125rem", md: "1.4rem" }, lineHeight: 1.6, mb: 3 }}>
              I’m Phi Nguyen, a designer and web developer with a degree from OCAD University. My practice spans brand identity, editorial design, illustration and digital experiences.
            </Typography>
            <Typography component="p" sx={{ fontFamily: "NeueMontreal-Book", fontSize: "1.125rem", lineHeight: 1.7, mb: 3 }}>
              I start with a concept and explore how it can take shape across different materials and formats—from a printed menu to a window graphic or an everyday object. I work with individuals and businesses across countries to turn their ideas into visual identities and useful applications.
            </Typography>
            <Typography component="p" sx={{ fontFamily: "NeueMontreal-Book", fontSize: "1.125rem", lineHeight: 1.7, mb: 3 }}>
              Alongside my design practice, I build websites with HTML, CSS and React. Have a project in mind? I’d love to hear about it.
            </Typography>
            <Typography variant="body2">
              Email: <a href="mailto:xuanphiart@gmail.com">xuanphiart@gmail.com</a>
              <br />
              Phone: <a href="tel:+16475611199">+1 (647) 561-1199</a>
              <br />
            </Typography>
            <Button
              variant="text"
              component="a"
              href="/Phi Nguyen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 1,
                px: 0,
                minWidth: 0,
                textTransform: "none",
                justifyContent: "flex-start",
              }}
            >
              View résumé (PDF)
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
