import React from "react";
import InputView from "../View/InputView";
import { InputFieldProps } from "../types/InputFieldTypes";

const InputContainer: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  type = "text",
  errors,
}) => {
  return (
    <>
      <InputView
        name={name}
        control={control}
        label={label}
        type={type}
        errors={errors}
      />
    </>
  );
};

export default InputContainer;
