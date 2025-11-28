import { Control, FieldErrors } from "react-hook-form";

export interface TagInputProps {
  name: string;
  control: Control<any>;
  label: string;
  errors: FieldErrors;
}

export interface TagInputViewProps {
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
}

export interface UseTagInputControllerReturn {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddTag: () => void;
  handleRemoveTag: (tag: string) => void;
}
