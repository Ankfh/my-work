import { useState } from "react";
import { UseTagInputControllerReturn } from "../types/TagInputTypes";

const useTagInputController = (
  value: string[] = [],
  onChange: (value: string[]) => void
): UseTagInputControllerReturn => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTag = (): void => {
    const newTag = inputValue.trim();
    if (
      newTag &&
      !value.some((v) => v.toLowerCase() === newTag.toLowerCase())
    ) {
      onChange([...value, newTag]);
    }
    setInputValue("");
  };

  const handleRemoveTag = (tagToRemove: string): void => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return {
    inputValue,
    setInputValue,
    handleAddTag,
    handleRemoveTag,
  };
};

export default useTagInputController;
