import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "./Components/navbar/navbarComp";
import FooterComp from "./Components/footer/footerComp";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import "./app.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const App = () => {
  return (
    <div className="app">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* <NavbarComp /> */}
          <Outlet />
          {/* <FooterComp /> */}
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
};

export default App;
