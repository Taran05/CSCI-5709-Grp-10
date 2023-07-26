import express from "express";
import blockDatesCont from "../../controllers/availability-calendar/blockDatesCont";

const router = express.Router();

router.post("/blockDates", blockDatesCont.blockDates);
router.get("/getUnavailableDates", blockDatesCont.getUnavailableDates);
 
export default router;