/**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */

import mongoose from "mongoose";

const PaymentDetails = mongoose.model(
  "Payment",
  new mongoose.Schema({
    mentorId: String,
    accountNumber: Number,
    transitNumber: Number,
    institutionNumber: Number,
    email: String,
  })
);

export default PaymentDetails;
