import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

function MainFooter() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 4 },
        pb: { xs: 2, md: 3 },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          borderTop: "1px solid rgba(5, 2, 3, 0.1)",
          pt: 2,
          minHeight: "auto",
        }}
      >
        <Typography variant="body1">
          © {new Date().getFullYear()} Phi Nguyen. All Rights Reserved.
        </Typography>
      </Toolbar>
    </Box>
  );
}

export default MainFooter;
