import mongoose, { Document, Model } from 'mongoose';

export interface IDefaultSchedule extends Document {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

const defaultScheduleSchema = new mongoose.Schema({
  dayOfWeek: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

const Schedule: Model<IDefaultSchedule> = mongoose.model<IDefaultSchedule>('DefaultSchedule', defaultScheduleSchema);

export default Schedule;
