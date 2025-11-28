import {
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormSetError,
  UseFormClearErrors,
} from "react-hook-form";

export interface FileInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: FieldErrors;
  setValue: UseFormSetValue<any>;
  setError: UseFormSetError<any>;
  clearErrors: UseFormClearErrors<any>;
  errorMessage?: string;
  typeErrorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  images?: File[];
  accepted?: string;
  onRemoveImage?: () => void;
  isEdit?: boolean;
}

export interface FileInputUIProps
  extends Pick<FileInputProps, "name" | "errors" | "images" | "accepted"> {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onFramClick: () => void;
  onRemoveImage?: () => void;
  isEdit?: boolean;
}
