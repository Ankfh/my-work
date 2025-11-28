import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormSetError,
  UseFormSetValue,
  UseFormClearErrors,
} from "react-hook-form";

export interface AddLinksAndContactsInputs {
  github?: string;
  linkedin?: string;
  upwork?: string;
  fiver?: string;
  email?: string;
  phone?: string;
}

export interface AddLinksAndContactsViewProps {
  control: Control<AddLinksAndContactsInputs>;
  errors: FieldErrors<AddLinksAndContactsInputs>;
  register: UseFormRegister<AddLinksAndContactsInputs>;
  onSubmit: ReturnType<UseFormHandleSubmit<AddLinksAndContactsInputs>>;
  setError: UseFormSetError<AddLinksAndContactsInputs>;
  setValue: UseFormSetValue<AddLinksAndContactsInputs>;
  clearErrors: UseFormClearErrors<AddLinksAndContactsInputs>;
  loading: boolean;
}
