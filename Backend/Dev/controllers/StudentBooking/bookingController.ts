// controllers/bookingController.ts
import { Request, Response } from "express";
import StudentBooking from "../../models/StudentBooking";

interface BookingRequest extends Request {
  body: {
    serviceName: string;
    serviceDuration: string;
    selectedDate: Date;
    selectedTime: string;
    isPaid: boolean;
    mentorId: string;
    studentName: string;
    studentEmail: string;
    callAbout: string;
  };
}

export const saveBooking = async (req: BookingRequest, res: Response) => {
  const booking = new StudentBooking({
    serviceName: req.body.serviceName,
    serviceDuration: req.body.serviceDuration,
    selectedDate: req.body.selectedDate,
    selectedTime: req.body.selectedTime,
    isPaid: req.body.isPaid,
    mentorId: req.body.mentorId,
    studentName: req.body.studentName,
    studentEmail: req.body.studentEmail,
    callAbout: req.body.callAbout,
  });

  try {
    await booking.save();
    res.send({ message: "Booking Saved!" });
  } catch (error) {
    res.status(500).send({ error: "Failed to save booking" });
  }
};
