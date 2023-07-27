  /**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */ 
import express from "express";
import alternateScheduleCont from "../../controllers/availability-calendar/alternateScheduleCont";

const router = express.Router();

router.post("/saveAlternateSchedule", alternateScheduleCont.saveAlternateSchedule);
router.get("/getAlternateSchedule", alternateScheduleCont.getAlternateSchedule);
router.get("/getAlternateAvailableDates", alternateScheduleCont.getAlternateAvailableDates);
 
export default router;