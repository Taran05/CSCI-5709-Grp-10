/**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */

import mongoose from "mongoose";

const BlockedDates = mongoose.model(
  "BlockedDate",
  new mongoose.Schema({
    mentorId: String,
    dates: [String],
  })
);

export default BlockedDates;
