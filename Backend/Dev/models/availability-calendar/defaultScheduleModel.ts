  /**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */ 
import mongoose, { Document, Model } from 'mongoose';

export interface IDefaultSchedule extends Document {
  day: string;
  startTime: string;
  endTime: string;
  mentorId: string;
}

const defaultScheduleSchema = new mongoose.Schema({
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  mentorId: { type: String, required: true}
});

const Schedule: Model<IDefaultSchedule> = mongoose.model<IDefaultSchedule>('DefaultSchedule', defaultScheduleSchema);

export default Schedule;
