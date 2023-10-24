import React from "react";
import RiSpa from "../features/pages/RiSpa";
import SaigonZine from "../features/pages/SaigonZine";
import Fair from "../features/pages/Fair";
import Top100Album from "../features/pages/Top100Album";
import BombeeHoney from "../features/pages/BombeeHoney";
import LoveMePoster from "../features/pages/LoveMePoster";
import EnneHomestay from "../features/pages/EnneHomestay";
import Misc1 from "../features/pages/Misc1";

import { Container, Grid, Typography } from "@mui/material";

function HomePage() {
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
      <SaigonZine />
      <Fair />
      <RiSpa />
      <Top100Album />
      <Misc1/>
      <EnneHomestay />
      <BombeeHoney/>
      <LoveMePoster />
    </Container>
  );
}

export default HomePage;
