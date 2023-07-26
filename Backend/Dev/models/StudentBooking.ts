// models/StudentBooking.ts
import mongoose from "mongoose";

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

export default StudentBooking;
