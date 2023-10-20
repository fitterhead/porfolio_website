import React from "react";
import { Toolbar, Typography } from "@mui/material";

function MainFooter() {
  return (
    <Toolbar>
      <Typography variant="body1">
        © {new Date().getFullYear()} Phi Nguyen. All Rights Reserved.
      </Typography>
    </Toolbar>
  );
}

export default MainFooter;
