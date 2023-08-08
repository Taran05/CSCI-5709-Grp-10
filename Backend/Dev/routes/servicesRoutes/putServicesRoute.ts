/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */
import express from "express";

import { saveService } from "../../controllers/servicesController/putServicesCont";

const router = express.Router();

// POST /api/fetch/fetchCity
router.post("/saveService", saveService);


const putServicesRoute = router
export default  putServicesRoute;