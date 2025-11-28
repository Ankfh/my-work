// src/components/login/types/UseLoginStateControllerResult.ts
import { Control, FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { LoginFormInputs } from "./loginTypes";

export interface UseLoginStateControllerResult {
  register: UseFormRegister<LoginFormInputs>;
  onSubmit: ReturnType<UseFormHandleSubmit<LoginFormInputs>>;
  errors: FieldErrors<LoginFormInputs>;
  loginLoading: boolean;
  control: Control<LoginFormInputs>;
}
