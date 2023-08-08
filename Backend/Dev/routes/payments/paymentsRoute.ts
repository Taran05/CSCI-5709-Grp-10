/**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */

import express from "express";
import { savePaymentDetails, getPaymentDetails, getBalanceDetails, transferAmount } from "../../controllers/payments/paymentsCont";

const router = express.Router();

router.post("/savePaymentDetails", savePaymentDetails);
router.get("/getPaymentDetails", getPaymentDetails);
router.get("/getBalanceDetails", getBalanceDetails);
router.post("/transferAmount", transferAmount);

export default router;
