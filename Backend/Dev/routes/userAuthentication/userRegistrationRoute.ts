import express from "express";
const router = express.Router();
import userRegistrationCont from "../../controllers/userAuthentication/userRegistrationCont";
import getAllUsernamesCont from "../../controllers/userAuthentication/getAllUsernamesCont";
import getUserDetailsCont from "../../controllers/userAuthentication/getUserDetailsCont";
// POST /register/
router.post("/registerUser", userRegistrationCont.userRegisteration);
router.get(
  "/registerUser/getAllUsernames",
  getAllUsernamesCont.getAllUsernames
);
router.post("/registerUser/getUserDetails", getUserDetailsCont.getUserDetails);

export const userRegisterRoute = router;
