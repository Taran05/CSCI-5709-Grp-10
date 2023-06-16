import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "../Components/navbar/navbarComp";

const App = () => {
  return (
    <div className="app">
      <NavbarComp />
      <Outlet></Outlet>
    </div>
  );
};

export default App;
