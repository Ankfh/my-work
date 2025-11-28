// src/components/login/types/loginTypes.ts
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface LoginViewProps {
  onSubmit: ReturnType<UseFormHandleSubmit<LoginFormInputs>>;
  control: Control<LoginFormInputs>;
  errors: FieldErrors<LoginFormInputs>;
  loginLoading: boolean;
}
