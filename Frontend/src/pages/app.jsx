import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/navbar/navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar className="nav-div" />
      <Outlet></Outlet>
    </div>
  );
};

export default App;
