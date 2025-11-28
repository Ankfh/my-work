// src/components/profile/types/AddProfileTypes.ts
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";

export interface AddProfileFormInputs {
  name: string;
  profession: string;
  image: File[]
}

export interface AddProfileViewProps {
  control: Control<AddProfileFormInputs>;
  register: UseFormRegister<AddProfileFormInputs>;
  errors: FieldErrors<AddProfileFormInputs>;
  onSubmit: () => void;
  profileLoading: boolean;
  setError: any;
  setValue: any;
  clearErrors: any;
  images: File[];
}

export interface UseAddProfileStateControllerResult {
  control: Control<AddProfileFormInputs>;
  register: UseFormRegister<AddProfileFormInputs>;
  errors: FieldErrors<AddProfileFormInputs>;
  onSubmit: () => void;
  profileLoading: boolean;
  setError: any;
  setValue: any;
  clearErrors: any;
  watch: any;
}
