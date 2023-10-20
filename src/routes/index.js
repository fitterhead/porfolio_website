import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import SaigonZineDetail from "../features/details/SaigonZineDetail";
import RiSpaDetail from "../features/details/RiSpaDetail";
import EnneDetail from "../features/details/EnneDetail";
import BombeeDetail from "../features/details/BombeeDetail";
import FairDetail from "../features/details/FairDetail";
import LoveMePosterDetail from "../features/details/LoveMePosterDetail";
import OkComputer from "../features/details/OkComputer";
import Beyond from "../features/details/Beyond";
import Consumerism from "../features/details/Consumerism";
import Top100Detail from "../features/details/Top100Detail";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="saigonzine" element={<SaigonZineDetail />} />
        <Route path="rispa" element={<RiSpaDetail />} />
        <Route path="enne" element={<EnneDetail />} />
        <Route path="bombee" element={<BombeeDetail />} />
        <Route path="fair" element={<FairDetail />} />
        <Route path="loveme" element={<LoveMePosterDetail />} />
        <Route path="okcomputer" element={<OkComputer />} />
        <Route path="beyond" element={<Beyond />} />
        <Route path="consumerism" element={<Consumerism />} />
        <Route path="top100" element={<Top100Detail />} />
      </Route>
    </Routes>
  );
}

export default Router;
