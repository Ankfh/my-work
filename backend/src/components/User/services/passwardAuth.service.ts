import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  ComparePasswordsParams,
  GenerateTokenParams,
} from "../types/passwordAuthType";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRES_IN = "7d";

export const generateToken = ({ user }: GenerateTokenParams): string => {
  return jwt.sign(
    { id: user._id, email: user.email, userName: user.userName },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};
