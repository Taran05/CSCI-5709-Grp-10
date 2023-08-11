/**
 * @author Shivam Lakhanpal <sh475218@dal.ca/B00932887>
 */

import React, { useEffect, useState } from "react";
import { GET_MENTOR_BOOKINGS } from "../../utils/apiUrls";
import BookingDashboardComp from "../../Components/Booking Dashboard/bookingComp";
import PageHeaderComp from "../../Components/Booking Dashboard/header/headerComp";

function MentorBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const localUser = JSON.parse(localStorage.getItem("user"));
      const mentorId = localUser && localUser.userName;

      try {
        const response = await fetch(
          GET_MENTOR_BOOKINGS + "/mentorId=" + mentorId
        );
        const data = await response.json();

        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <PageHeaderComp />
      {bookings.map((booking) => (
        <BookingDashboardComp key={booking._id} booking={booking} />
      ))}
    </div>
  );
}

export default MentorBookings;
