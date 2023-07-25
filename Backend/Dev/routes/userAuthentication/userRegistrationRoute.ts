import express from "express";
const router = express.Router();
import userRegistrationCont from "../../controllers/userAuthentication/userRegistrationCont";
import getAllUsernamesCont from "../../controllers/userAuthentication/getAllUsernamesCont";

// POST /register/
router.post("/registerUser", userRegistrationCont.userRegisteration);
router.get(
  "/registerUser/getAllUsernames",
  getAllUsernamesCont.getAllUsernames
);

export const userRegisterRoute = router;
