// routes.ts
import express from "express";
import { saveBooking } from "../controllers/StudentBooking/bookingController";
import { makePayment } from "../controllers/payments/makePaymentController";

const router = express.Router();

router.post("/api/saveBooking", saveBooking);
router.post("/payment/:mentorId", makePayment);

export default router;
