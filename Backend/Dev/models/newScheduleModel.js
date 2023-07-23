const mongoose = require('mongoose');

const createNewScheduleModel = (scheduleName) => {
  const newScheduleSchema = new mongoose.Schema({
    dayOfWeek: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true }
  });

  return mongoose.model(scheduleName, newScheduleSchema);
};

module.exports = createNewScheduleModel;
