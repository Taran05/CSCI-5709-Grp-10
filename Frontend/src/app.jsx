import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "./Components/navbar/navbarComp";
import Footer from "./Components/footer/footerComp";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <NavbarComp />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default App;
