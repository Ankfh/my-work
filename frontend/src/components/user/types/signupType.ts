// src/components/signup/types/index.ts
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

export interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
}

export interface SignUpViewProps {
  control: Control<SignupFormInputs>;
  errors: FieldErrors<SignupFormInputs>;
  onSubmit: ReturnType<UseFormHandleSubmit<SignupFormInputs>>;
  signUpLoading: boolean;
}
