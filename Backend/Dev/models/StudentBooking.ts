/**
 * @author Shivam Lakhanpal <sh475218@dal.ca/B00932887>
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */

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
    price: String,
    bookingId: String,
    isCancelled: Boolean,
  })
);

export default StudentBooking;
