import { FieldValues, Path, UseFormSetError } from "react-hook-form";

export const SetBackendValidation = <TFieldValues extends FieldValues>(
  setError: UseFormSetError<TFieldValues>,
  field: Path<TFieldValues>,
  message: string
): void => {
  setError(field, {
    type: "manual",
    message: message,
  });
};
