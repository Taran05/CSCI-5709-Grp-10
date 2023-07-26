/**
 * @author Shivam Lakhanpal <sh475218@dal.ca/B00932887>
 */

import express from "express";

import availabilityCont from "../../controllers/servicesController/availabilityCont";

const router = express.Router();

// POST /api/fetch/fetchCity

router.get("/availability/:mentorId", availabilityCont.availability);

const availabilityRoute = router;
export default availabilityRoute;
