import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme";
import "./styles.css";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        {/* <div className="background-color"> */}
        <div className="background-paper">
        <ScrollToTop/>
          <Router />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
