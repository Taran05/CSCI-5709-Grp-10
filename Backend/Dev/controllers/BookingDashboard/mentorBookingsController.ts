import { Request, Response } from "express";
import StudentBooking from "../../models/StudentBooking";

export const getMentorBookings = async (req: Request, res: Response) => {
  try {
    let { mentorId } = req.params;
    mentorId = mentorId.split("=")[1];
    if (!mentorId) {
      return res.status(400).send({ message: "Mentor ID is required" });
    }
    const bookings = await StudentBooking.find({ mentorId: mentorId });

    // Transform the selectedDate format for each booking
    bookings.forEach((booking) => {
      if (booking.selectedDate) {
        const date = new Date(booking.selectedDate);
        (booking as any).formattedSelectedDate = date
          .toISOString()
          .split("T")[0];
      }
    });

    return res.status(200).send(bookings);
  } catch (error) {
    console.error("Error fetching mentor bookings:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const { bookingId } = req.body;
    if (!bookingId) {
      return res.status(400).send({ message: "Booking ID is required" });
    }

    const updatedBooking = await StudentBooking.findOneAndUpdate(
      { bookingId: bookingId },
      { isCancelled: "true" }
    );

    if (!updatedBooking) {
      return res.status(404).send({ message: "Booking not found." });
    }

    return res.status(200).send({
      message: "Booking successfully cancelled.",
      booking: updatedBooking,
    });
  } catch (error) {
    console.error("Error canceling booking:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const rescheduleBooking = async (req: Request, res: Response) => {
  try {
    const { bookingId, newTime } = req.body;
    if (!bookingId || !newTime) {
      return res
        .status(400)
        .send({ message: "Booking ID and new time are required" });
    }

    // Parse the date and time from the ISO string
    const dateTimeParts = newTime.split("T");
    const selectedDate = dateTimeParts[0];
    const time12Hour = new Date(newTime).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    console.log("Booking ID:", bookingId);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", time12Hour);

    const updatedBooking = await StudentBooking.findOneAndUpdate(
      { bookingId: bookingId },
      {
        selectedTime: time12Hour,
        selectedDate: selectedDate + "T00:00:00.000+00:00",
      },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).send({ message: "Booking not found." });
    }

    return res.status(200).send({
      message: "Booking successfully rescheduled.",
      booking: updatedBooking,
    });
  } catch (error) {
    console.error("Error rescheduling booking:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export default { getMentorBookings, cancelBooking, rescheduleBooking };
