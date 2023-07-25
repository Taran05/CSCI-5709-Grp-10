import { Request, Response } from "express";
import User, { IUser } from "../../models/usersModel";
import { hashPassword } from "../../util/hashingUtil";
const userRegisteration = async (req: Request, res: Response) => {
  const { firstName, lastName, email, userName, password, reason, expertise } =
    req.body;

  try {
    const hashedPassword = await hashPassword(password);

    // Create a new user using the IUser interface with the hashed password
    const newUser: IUser = new User({
      firstName,
      lastName,
      email,
      userName,
      password: hashedPassword, // Save the hashed password
      reason,
      expertise,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message or other data as needed
    res.status(200).json({
      message: "User registered successfully",
      user: {
        firstName: newUser.firstName,
        userName: newUser.userName,
        email: newUser.email,
      },
    });
  } catch (error) {
    // Handle errors
    console.log(error);

    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
};

export default { userRegisteration };
