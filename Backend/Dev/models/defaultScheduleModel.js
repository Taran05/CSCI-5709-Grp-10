const mongoose = require('mongoose');

const defaultScheduleSchema = new mongoose.Schema({
  dayOfWeek: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

const Schedule = mongoose.model('DefaultSchedule', defaultScheduleSchema);

module.exports = Schedule;
