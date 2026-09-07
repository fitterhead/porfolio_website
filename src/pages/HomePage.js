import React from "react";
import RiSpa from "../features/pages/RiSpa";
import SaigonZine from "../features/pages/SaigonZine";
import Fair from "../features/pages/Fair";
import Top100Album from "../features/pages/Top100Album";
import BombeeHoney from "../features/pages/BombeeHoney";
import LoveMePoster from "../features/pages/LoveMePoster";
import EnneHomestay from "../features/pages/EnneHomestay";
import Misc1 from "../features/pages/Misc1";
import { Container } from "@mui/material";
import Reveal from "../components/Reveal";

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
      <Reveal delay={20}>
        <SaigonZine />
      </Reveal>
      <Reveal delay={40}>
        <Fair />
      </Reveal>
      <Reveal delay={60}>
        <RiSpa />
      </Reveal>
      <Reveal delay={80}>
        <Top100Album />
      </Reveal>
      <Reveal delay={100}>
        <Misc1 />
      </Reveal>
      <Reveal delay={120}>
        <EnneHomestay />
      </Reveal>
      <Reveal delay={140}>
        <BombeeHoney />
      </Reveal>
      <Reveal delay={160}>
        <LoveMePoster />
      </Reveal>
    </Container>
  );
}

export default HomePage;
