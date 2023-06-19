import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "./Components/navbar/navbarComp";
import FooterComp from "./Components/footer/footerComp";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <NavbarComp />
      <Outlet></Outlet>
      <FooterComp />
    </div>
  );
};

export default App;
