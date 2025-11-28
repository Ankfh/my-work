import { Control, FieldErrors } from "react-hook-form";

export interface InputFieldProps {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  errors: FieldErrors;
}
