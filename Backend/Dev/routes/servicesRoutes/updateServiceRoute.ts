/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */
import express from "express";

import updateServicesCont from "../../controllers/servicesController/updateServicesCont";

const router = express.Router();

// POST /api/fetch/fetchCity
router.post("/updateService", updateServicesCont.updateService);


const updateServicesRoute = router
export default  updateServicesRoute;