import { Control, FieldErrors } from "react-hook-form";

export interface ChatFormInputs {
  message: string;
}

export interface ChatInputProps {
  control: Control<ChatFormInputs>;
  errors: FieldErrors<ChatFormInputs>;
  onSend: () => void;
  isSending?: boolean;
}
