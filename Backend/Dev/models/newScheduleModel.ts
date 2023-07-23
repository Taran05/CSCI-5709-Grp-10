import mongoose, { Document, Model } from 'mongoose';

export interface ICustomSchedule extends Document {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  scheduleName: string;
}

const createNewScheduleModel = (scheduleName: string): Model<ICustomSchedule> => {
  const newScheduleSchema = new mongoose.Schema({
    dayOfWeek: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true }
  });

  return mongoose.model<ICustomSchedule>(scheduleName, newScheduleSchema);
};

export default createNewScheduleModel;
