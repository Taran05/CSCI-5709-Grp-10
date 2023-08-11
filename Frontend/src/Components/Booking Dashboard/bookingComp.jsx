/**
 * @author Shivam Lakhanpal <sh475218@dal.ca/B00932887>
 */

import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, Button, Modal, Snackbar } from "@mui/material";
import EditBookingComp from "../Booking Dashboard/Edit-Reschedule Booking/EditBookingComp";
import "./bookingComp.css";

function BookingDashboardComp({ booking }) {
  const [openModal, setOpenModal] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleSnackBarClose = () => setSnackBarOpen(false);
  let dateContent;

  const isBookingUpcoming = (selectedDate) => {
    const today = new Date();
    const bookingDate = new Date(selectedDate);

    // Reset time components of both dates to compare only the date parts
    today.setHours(0, 0, 0, 0);
    bookingDate.setHours(0, 0, 0, 0);

    return bookingDate >= today;
  };
  let bookingStatus = isBookingUpcoming(booking.selectedDate)
    ? "Upcoming"
    : "Completed";

  const formattedDate = booking.selectedDate
    ? new Date(booking.selectedDate).toLocaleDateString()
    : "Not specified";
  if (booking.isCancelled) {
    dateContent = <span style={{ color: "red" }}>Cancelled</span>;
  } else {
    dateContent =
      formattedDate.split("/")[0] + "/" + formattedDate.split("/")[1];
  }

  const handleCancel = async () => {
    try {
      await axios.post("/cancelBooking", { bookingId: booking.id });
      setSnackBarMessage("Booking cancelled");
      setSnackBarOpen(true);
      booking.selectedDate.$date = "Meeting cancelled";
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };

  const handleReschedule = async () => {
    try {
      await axios.post("/reschedule", { bookingId: booking.id });
      setSnackBarMessage("Booking rescheduled");
      setSnackBarOpen(true);
      booking.selectedDate.$date = "Meeting rescheduled";
    } catch (error) {
      console.error("Error rescheduling booking:", error);
    }
  };

  return (
    <div className="booking-card">
      <Card>
        <CardContent>
          <div className="booking-header">
            <h4 className="booking-title">
              {booking.serviceName} ({booking.serviceDuration})
            </h4>
            <p className="booking-date">Date: {dateContent}</p>
          </div>
          <p className="booking-time">Time: {booking.selectedTime}</p>
          <div className="divider"></div>
          <div className="button-and-status">
            <Button
              variant="outlined"
              className="call-details-btn"
              onClick={handleOpen}
            >
              Call Details
            </Button>
            <p className="booking-status">{bookingStatus}</p>
          </div>
          <Modal open={openModal} onClose={handleClose} centered>
            <div className="modal-content">
              <h4>Edit Booking Details</h4>
              <p>Call About: {booking.callAbout}</p>
              <EditBookingComp
                booking={booking}
                onReschedule={handleReschedule}
                onCancel={handleCancel}
              />
            </div>
          </Modal>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackBarOpen}
        onClose={handleSnackBarClose}
        message={snackBarMessage}
      />
    </div>
  );
}

export default BookingDashboardComp;
