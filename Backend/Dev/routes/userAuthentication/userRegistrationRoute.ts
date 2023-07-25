import express from "express";
const router = express.Router();
import userRegistrationCont from "../../controllers/userAuthentication/userRegistrationCont";

// POST /register/
router.post("/registerUser", userRegistrationCont.userRegisteration);

export const userRegisterRoute = router;
