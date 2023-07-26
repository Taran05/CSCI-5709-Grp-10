import express from "express";
const router = express.Router();
import userLoginCont from "../../controllers/userAuthentication/userLoginCont";

// POST /login/
router.post("/loginUser", userLoginCont.userLogin);

export const userLoginRoute = router;
