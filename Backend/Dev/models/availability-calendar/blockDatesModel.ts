  /**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */ 
import mongoose, { Document, Model } from 'mongoose';

export interface IBlockedDate extends Document {
 blockedDatesData : Object;
}

const blockDatesSchema = new mongoose.Schema({
  blockedDatesData: { type: Object, required: true },
});

const BlockedDates: Model<IBlockedDate> = mongoose.model<IBlockedDate>('BlockedDates', blockDatesSchema);

export default BlockedDates;
