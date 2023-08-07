  /**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */ 
import mongoose, { Document, Model } from 'mongoose';

export interface ICalendarSettings extends Document {
  calendarSettingsData: object;
}

const calendarSettingsSchema = new mongoose.Schema({
  calendarSettingsData: { type: Object, required: true },
});

const CalendarSettings: Model<ICalendarSettings> = mongoose.model<ICalendarSettings>('CalendarSettings', calendarSettingsSchema);

export default CalendarSettings;
