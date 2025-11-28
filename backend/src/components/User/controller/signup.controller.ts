import { Request, Response } from "express";
import { getUserByEmail, createUser } from "../services/user.service";
import { hashPassword } from "../services/passwordHash";

interface SignupParams {
  email: string;
  name: string;
  password: string;
}

export const signupUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, name, password }: SignupParams = req.body;
    console.log(req.body, "heloo");
    if (!email || !name || !password) {
      res.status(400).json({
        success: false,
        type: "VALIDATION_ERROR",
        message: "Email, username and password are required",
      });
      return;
    }

    const existing = await getUserByEmail({ email });
    if (existing) {
      res.status(409).json({
        success: false,
        type: "EMAIL_IN_USE",
        message: "Email is already registered",
      });
      return;
    }

    // Hash the password before saving
    const hashedPassword = await hashPassword(password);
    const user = await createUser({
      email,
      userName: name,
      password: hashedPassword, // Store the hashed password
    });

    res.status(201).json({
      success: true,
      type: "SUCCESS",
      message: "Account created successfully",
      user: {
        id: user._id,
        email: user.email,
        userName: user.userName,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      type: "SERVER_ERROR",
      message: "Internal server error",
    });
  }
};
