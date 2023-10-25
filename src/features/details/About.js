import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const About = () => {
  const openPdfFile = () => {
    window.open("/Phi Nguyen_Resume.pdf", "_blank");
  };

  return (
    <Container maxWidth="lg" style={{
     marginTop: "50px"
      }}>
      <Grid container spacing={2} alignItems="flex-start">
        {/* Image */}
        <Grid item xs={12} md={6}>
          <img
            src="/81631351_2811445118914931_1487271570295488512_n.jpg"
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
              Email: xuanphiart@gmail.com
              <br />
              Phone: +1 (647) 561-1199
              <br />
              <a href="#" onClick={openPdfFile}>
                Read here to know more about me
              </a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
