  /**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */ 
import express from "express";
import calendarsettingsCont from "../../controllers/availability-calendar/calendarsettingsCont";

const router = express.Router();

router.post("/saveCalendarSettings", calendarsettingsCont.saveCalendarSettings);
router.get("/getCalendarSettings", calendarsettingsCont.getCalendarSettings);

export default router;
