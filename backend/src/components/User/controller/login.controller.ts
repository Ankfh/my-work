import { Request, Response } from "express";
import { getUserByEmail } from "../services/user.service";
import { generateToken } from "../services/passwardAuth.service";
import { comparePasswords } from "../services/passwordHash";

interface LoginParams {
  email: string;
  password: string;
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: LoginParams = req.body;
    console.log(req.body, "req.body");
    if (!email || !password) {
      res.status(400).json({
        success: false,
        type: "VALIDATION_ERROR",
        message: "Email and password are required",
      });
      return;
    }
    const user = await getUserByEmail({ email });
    console.log(user, "user");
    if (!user) {
      res.status(404).json({
        success: false,
        type: "USER_NOT_FOUND",
        message: "User not found",
      });
      return;
    }

    const isMatch = await comparePasswords({
      plainPassword: password,
      hashedPassword: user?.password,
    });

    if (!isMatch) {
      res.status(401).json({
        success: false,
        type: "PASSWORD_MISMATCH",
        message: "Invalid password",
      });
      return;
    }

    const token = generateToken({ user });

    res.status(200).json({
      success: true,
      type: "LOGIN_SUCCESS",
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        userName: user.userName,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      type: "LOGIN_SERVER_ERROR",
      message: "Internal server error",
    });
  }
};
