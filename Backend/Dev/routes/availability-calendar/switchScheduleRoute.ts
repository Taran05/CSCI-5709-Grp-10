  /**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */ 
  import express from "express";
  import switchScheduleCont from "../../controllers/availability-calendar/switchScheduleCont";
  
  const router = express.Router();
  
  router.post("/switchSchedule", switchScheduleCont.switchSchedule);
  router.get("/getSelectedSchedule", switchScheduleCont.getSelectedSchedule);
   
  export default router;