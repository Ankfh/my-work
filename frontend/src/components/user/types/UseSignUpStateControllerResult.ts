// src/components/signup/hooks/useSignUpStateController.ts
import { useForm, FieldErrors } from "react-hook-form";
import { SignupFormInputs } from "./signupType";

export interface UseSignUpStateControllerResult {
  register: ReturnType<typeof useForm<SignupFormInputs>>["register"];
  onSubmit: () => Promise<void>;
  errors: FieldErrors<SignupFormInputs>;
  signUpLoading: boolean;
  serverError?: unknown;
  control: ReturnType<typeof useForm<SignupFormInputs>>["control"];
}
