/**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */

import mongoose from "mongoose";

const PaymentDetails = mongoose.model(
  "Balance",
  new mongoose.Schema({
    mentorId: String,
    totalBalance: Number,
  })
);

export default PaymentDetails;
