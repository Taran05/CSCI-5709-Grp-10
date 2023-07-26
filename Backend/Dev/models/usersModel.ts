import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  reason: string;
  expertise: string[];
}

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true }, // Add unique: true here
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  reason: { type: String, required: true },
  expertise: { type: [String], required: true },
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
