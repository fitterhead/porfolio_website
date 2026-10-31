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
            alt="Profile"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>

        {/* Personal Information */}
        <Grid item xs={12} md={6}>
          <Box p={2} bgcolor="#f5f5f5" borderRadius={4}>
            <Typography variant="h1" gutterBottom>
              Phi Nguyen
            </Typography>
            <Typography variant="h3" paragraph>
              I am Phi Nguyen, a dedicated designer and web developer, proudly
              holding a degree from OCAD University. With a rich background in
              design and coding, I possess a versatile skill set that bridges
              the gap between creativity and technology. My design philosophy is
              rooted in conceptual thinking, where I transform complex ideas
              into visually compelling narratives. From 2D to 3D, editorial to
              illustration, I leverage my expertise to create seamless digital
              experiences. Additionally, proficient in CSS, HTML, React, and UX
              design, I excel in crafting visually stunning and highly
              functional websites. I collaborate with clients across multiple
              countries. As an experienced branding designer, I work closely
              with individuals and businesses to capture their essence and
              translate it into compelling visual identities. Through my work, I
              help clients express their visions clearly and confidently on a
              global scale.
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
