import React, { useState } from "react";
import {
  alpha,
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { useContext } from "react";
import { useEffect } from "react";
import "../styles.css";

const COMPONENTS = {
  MuiInputLabel: {
    defaultProps: {
      sx: {
        fontSize: "16px",
        top: 2,
      },
    },
  },
};

const PRIMARY = {
  main: "#826F66",
  dark: "#563635",
  light: "#F1DEC9",
  line: "#DFBB9D",
};
const SECONDARY = {
  main: "#ED315D",
  dark: "#F58EA6",
  light: "#FAC7D3",
};

const TYPOGRAPHY = {
  h1: {
    fontFamily: "NeueMontreal-Book",
    fontWeight: 400,
    fontSize: "0.8rem", // Default font size
    "@media (min-width:600px)": {
      fontSize: "1.5rem", // Font size for screens 600px and above
    },
    "@media (min-width:960px)": {
      fontSize: "2.5rem", // Font size for screens 960px and above
    },
    letterSpacing: "-5",
    color: "#050203",
  },
  /* -------------------------------- bodytext -------------------------------- */
  h2: {
    fontFamily: "NeueMontreal-Book",
    fontWeight: 400,
    fontSize: "0.5rem", // Default font size
    "@media (min-width:600px)": {
      fontSize: "1rem", // Font size for screens 600px and above
    },
    "@media (min-width:960px)": {
      fontSize: "2rem", // Font size for screens 960px and above
    },
    letterSpacing: "-5",
    color: "#050203",
  },

  /* ---------------------------------- logo ---------------------------------- */
  logo: {
    fontFamily: "Romie-Italic",
    fontWeight: 400,
    fontSize: "1.2rem", // Default font size
    "@media (min-width:600px)": {
      fontSize: "2rem", // Font size for screens 600px and above
    },
    "@media (min-width:960px)": {
      fontSize: "3rem", // Font size for screens 960px and above
    },
    letterSpacing: "-5",
    lineHeight: "0.9",
    color: "#050203",
  },

  /* ---------------------------------- menu ---------------------------------- */
  menu: {
    fontFamily: "NeueMontreal-Book",
    fontWeight: 400,
    fontSize: "1rem", // Default font size
    "@media (min-width:600px)": {
      fontSize: "1.5rem", // Font size for screens 600px and above
    },
    "@media (min-width:960px)": {
      fontSize: "2.5rem", // Font size for screens 960px and above
    },
    letterSpacing: "-5",
    lineHeight: "0.9",
    color: "#050203",
  },
};

function ThemeProvider({ children }) {
  const theme = {
    components: COMPONENTS,
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      background: {
        default: "#fafafa",
        // paper: "../public/white-paper-texture.jpg",
      },
    },
    typography: TYPOGRAPHY,
  };

  const mainTheme = createTheme(theme);
  // theme.components = customizeComponents(theme);

  return (
    <MUIThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
