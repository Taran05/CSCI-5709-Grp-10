import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "./Components/navbar/navbarComp";
import FooterComp from "./Components/footer/footerComp";
import { StyledEngineProvider } from "@mui/material/styles";
import "./app.css";
import SideBar from "./Components/sideBar/sideBarComp";
const App = () => {
  return (
    <div className="app">
      <StyledEngineProvider injectFirst>
        <NavbarComp />
        <Outlet></Outlet>
        <FooterComp />
      </StyledEngineProvider>
    </div>
  );
};

export default App;
