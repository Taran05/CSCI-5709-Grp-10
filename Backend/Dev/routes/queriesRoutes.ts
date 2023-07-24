import express from "express";

import queriesCont from "../controllers/queriesCont";

const router = express.Router();

// POST /api/fetch/fetchCity
router.post("/getQueries", queriesCont.getQueries);
router.post("/sendResponse", queriesCont.sendResponse);
router.post("/saveQuery", queriesCont.saveQuery);
router.post("/deleteQuery", queriesCont.deleteQuery);


const queriesRoutes = router
export default  queriesRoutes;