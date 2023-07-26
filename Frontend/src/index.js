import ReactDOM from "react-dom/client";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/loginPage";
import RegisterPage from "./pages/register/registerPage";
import RegisterAboutYouPage from "./pages/register/registerAboutYou/registerAboutYouPage";

import App from "./app";
import LandingPage from "./pages/landing/landingPage";
import ContactPage from "./pages/contact/contactPage";
import AvailabilityCalendarPage from "./pages/availability-calendar/availabilityCalendarPage";
import ProfileManagementPage from "./pages/profileMangement/profileMangementPage";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about-you" element={<RegisterAboutYouPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/calendar" element={<AvailabilityCalendarPage />} />
        <Route path="/profile-settings" element={<ProfileManagementPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
