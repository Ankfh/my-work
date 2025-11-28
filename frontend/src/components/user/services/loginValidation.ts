// src/components/login/services/loginValidation.ts
import * as yup from "yup";
import { ObjectSchema } from "yup";
import { LoginFormInputs } from "../types/loginTypes";

export const loginSchema: ObjectSchema<LoginFormInputs> = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
