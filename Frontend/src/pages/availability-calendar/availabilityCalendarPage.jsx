/**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */
import "./availabilityCalendarPage.css";
import React, { useEffect } from "react";
import AvailabilityCalendarComp from "../../Components/availability-calendar/availability-calendarComp";
import { useNavigate } from "react-router-dom";

function CalendarPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      const localUser = JSON.parse(localStorage.getItem("user"));
      console.log("Printing local user:", localUser);

      if (!localUser) {
        navigate("/login");
      }
    };

    checkLogin();
  }, []);

  return <AvailabilityCalendarComp></AvailabilityCalendarComp>;
}

export default CalendarPage;
