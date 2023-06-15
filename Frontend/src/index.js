import ReactDOM from "react-dom/client";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import App from "./pages/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Register />);
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
