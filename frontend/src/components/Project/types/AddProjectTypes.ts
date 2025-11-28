import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";

export type AddProjectFormValues = {
  userId: string;
  name: string;
  image?: File | string;
  description: string;
  visitLink?: string;
  downloadLink?: string;
  tech?: string;
};

export interface AddProjectViewProps {
  onSubmit: () => void;
  control: any;
  errors: any;
  register: any;
  loading: boolean;
  setValue: any;
  setError: any;
  clearErrors: any;
  images: null | File | File[] | undefined | string;
  isEdit: boolean;
  onRemoveImage?: () => void;
}
