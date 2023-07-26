import mongoose, { Document, Model } from 'mongoose';

export interface IAlternateSchedule extends Document {
  day: string;
  startTime: string;
  endTime: string;
  mentorID: string;
}

const alternateScheduleSchema = new mongoose.Schema({
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  mentorID: { type: String, required: true}
});

const Schedule: Model<IAlternateSchedule> = mongoose.model<IAlternateSchedule>('AlternateSchedule', alternateScheduleSchema);

export default Schedule;
