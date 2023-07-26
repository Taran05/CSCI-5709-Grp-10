import ReactDOM from "react-dom/client";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/loginPage";
import RegisterPage from "./pages/register/registerPage";
import RegisterAboutYouPage from "./pages/register/registerAboutYou/registerAboutYouPage";

import App from "./app";
import StudentBookingApp from "./studentBookingApp";
import LandingPage from "./pages/landing/landingPage";
import ContactPage from "./pages/contact/contactPage";
import AvailabilityCalendarPage from "./pages/availability-calendar/availabilityCalendarPage";
import MentorServiceHomePage from "./pages/MentorServiceBooking/HomePage/MentorServiceHomePage";
import BookingSchedulePage from "./pages/MentorServiceBooking/bookingSchedule/bookingSchedulePage";
import StudentDetailsPage from "./pages/MentorServiceBooking/studentDetails/studentDetailsPage";
import PaymentDetailsPage from "./pages/payments/paymentDetailsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Register />);
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
      </Route>
      <Route exact path="/" element={<StudentBookingApp />}>
        <Route path="/bookingSchedule" element={<BookingSchedulePage />} />
        <Route path="/paymentDetails" element={<PaymentDetailsPage />} />
        <Route path="/studentDetails" element={<StudentDetailsPage />} />
        <Route
          path="/mentorServiceBooking/:id"
          element={<MentorServiceHomePage />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
