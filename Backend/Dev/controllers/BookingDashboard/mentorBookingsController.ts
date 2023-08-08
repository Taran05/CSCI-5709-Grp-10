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
    const updatedBooking = await StudentBooking.findByIdAndUpdate(
      bookingId,
      { time: newTime },
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
