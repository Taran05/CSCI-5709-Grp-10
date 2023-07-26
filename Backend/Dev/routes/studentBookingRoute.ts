import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// MongoDB Model for Student Booking
const StudentBooking = mongoose.model(
  "StudentBooking",
  new mongoose.Schema({
    serviceName: String,
    serviceDuration: String,
    selectedDate: Date,
    selectedTime: String,
    isPaid: Boolean,
    mentorId: String,
    studentName: String,
    studentEmail: String,
    callAbout: String,
  })
);

router.post("/api/saveBooking", async (req, res) => {
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
});

router.post("/payment/:mentorId", async (req, res) => {
  const mentorId = req.params.mentorId;

  try {
    await StudentBooking.updateMany({ mentorId: mentorId }, { isPaid: true });
    res.send({ message: "Payment successful" });
  } catch (error) {
    res.status(500).send({ error: "Payment failed" });
  }
});

export default router;
