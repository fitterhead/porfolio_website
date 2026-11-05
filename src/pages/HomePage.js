import React from "react";
import { Link } from "react-router-dom";
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
import SummerMenu2025 from "../features/pages/SummerMenu2025";
import Summer2026 from "../features/pages/Summer2026";
import TerroniLAWindow from "../features/pages/TerroniLAWindow";
import Apron from "../features/pages/Apron";
import ToteBag from "../features/pages/ToteBag";
import Tray from "../features/pages/Tray";

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
      <Reveal delay={10}>
        <EnneHomestay />
      </Reveal>
      <Reveal delay={20}>
        <BombeeHoney />
      </Reveal>
      <Reveal delay={40}><Link className="project-card-link" to="/summer-2026"><Summer2026 preview /></Link></Reveal>
      <Reveal delay={50}><Link className="project-card-link" to="/summer-menu-2025"><SummerMenu2025 preview /></Link></Reveal>
      <Reveal delay={60}><Link className="project-card-link" to="/tray"><Tray preview /></Link></Reveal>
      <Reveal delay={70}><Link className="project-card-link" to="/tote-bag"><ToteBag preview /></Link></Reveal>
      <Reveal delay={80}><Link className="project-card-link" to="/terroni-la-window-screen"><TerroniLAWindow preview /></Link></Reveal>
      <Reveal delay={90}><Link className="project-card-link" to="/apron"><Apron preview /></Link></Reveal>
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
      <Reveal delay={160}>
        <LoveMePoster />
      </Reveal>
    </Container>
  );
}

export default HomePage;
