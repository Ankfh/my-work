import * as yup from "yup";
import { ObjectSchema } from "yup";
import { SignupFormInputs } from "../types/signupType";

export const signupSchema: ObjectSchema<SignupFormInputs> = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
