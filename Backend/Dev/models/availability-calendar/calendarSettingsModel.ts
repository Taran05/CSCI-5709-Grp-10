/**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */

import mongoose from "mongoose";

const CalendarSettings = mongoose.model(
  "CalendarSetting",
  new mongoose.Schema({
    mentorId: String,
    timezone: String,
    meetingLink: String,
    bookingPeriod: String,
    noticePeriod: String,
  })
);

export default CalendarSettings;
