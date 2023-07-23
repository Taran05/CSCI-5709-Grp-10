import mongoose, { Document, Model } from 'mongoose';

export interface IBlockedDate extends Document {
  date: string;
}

const blockDatesSchema = new mongoose.Schema({
  date: { type: String, required: true },
});

const BlockedDates: Model<IBlockedDate> = mongoose.model<IBlockedDate>('BlockedDates', blockDatesSchema);

export default BlockedDates;
