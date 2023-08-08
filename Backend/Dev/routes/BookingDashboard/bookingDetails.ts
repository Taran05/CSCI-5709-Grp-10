import express from "express";
import mentorBookingsController from "../../controllers/BookingDashboard/mentorBookingsController";

const router = express.Router();
router.get(
  "/getMentorBookings/:mentorId",
  mentorBookingsController.getMentorBookings
);
router.post("/cancelBooking", mentorBookingsController.cancelBooking);
router.post("/rescheduleBooking", mentorBookingsController.rescheduleBooking);

const bookingsRoute = router;
export default bookingsRoute;
