import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  const location = useLocation();
  const [isRouteTransitioning, setIsRouteTransitioning] = useState(false);

  useEffect(() => {
    setIsRouteTransitioning(true);

    const timer = window.setTimeout(() => {
      setIsRouteTransitioning(false);
    }, 650);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Box className={`route-progress ${isRouteTransitioning ? "is-active" : ""}`} />
      <MainHeader />

      <Box key={location.pathname} className="route-page">
        <Outlet />
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
