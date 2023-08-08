/**
 * @author Amanjot Singh <am854663@dal.ca/B00942293>
 */

import { Request, Response } from "express";
import User from "../../models/usersModel";

// Fetch and return all the details of a user with a given username
const checkEmailExist = async (req: Request, res: Response) => {
  const { email } = req.params;

  try {
    // Find a user with the given username
    const user = await User.findOne({ email: email });

    // If the user was not found, return a 404 status
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If the user was found, return the user object
    res.status(200).json({
      message: "User not found",
    });
  } catch (error) {
    // Handle errors
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user details" });
  }
};

export default { checkEmailExist };
