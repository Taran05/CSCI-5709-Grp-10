/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */

import mongoose, { Document, Model } from 'mongoose';

export interface IServices extends Document {
  serviceName: string;
  time: string;
  price: string;
  description: string;
  code: string;
  percentage: string;
  serviceType: string;
  mentorId: String;
}

const servicesModel = new mongoose.Schema({
    serviceName: { type: String, required: true },
    time: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: false },
    code: { type: String, required: false },
    percentage: { type: String, required: false },
    serviceType: { type: String, required: true },
    mentorId: { type: String, required: true },

  });

const Services: Model<IServices> = mongoose.model<IServices>('Services', servicesModel);

export default Services;
