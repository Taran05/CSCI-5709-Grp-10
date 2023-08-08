/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */
import express from "express";

import deleteServicesCont from "../../controllers/servicesController/deleteServicesCont";

const router = express.Router();

// POST /api/fetch/fetchCity
router.post("/deleteService", deleteServicesCont.deleteService);


const deleteServicesRoute = router
export default  deleteServicesRoute;