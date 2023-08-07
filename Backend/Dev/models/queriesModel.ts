/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */

import mongoose, { Document, Model } from 'mongoose';

export interface IQueries extends Document {
  name: string;
  email: string;
  time: string;
  title: string;
  content: string;
  isResponded: Boolean;
  response: String;
  mentorId: String;
}

const queriesModel = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    time: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    isResponded: { type: Boolean, required: true },
    response: { type: String, required: false },
    mentorId: { type: String, required: true },

  });

const Queries: Model<IQueries> = mongoose.model<IQueries>('Queries', queriesModel);

export default Queries;
