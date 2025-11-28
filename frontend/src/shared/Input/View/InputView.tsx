import React from "react";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "../types/InputFieldTypes";
import { MuiTextField } from "../style/MuiTextField";

const InputView: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  type = "text",
  errors,
}) => {
  return (
    <div className="w-full">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <MuiTextField
            fullWidth
            {...field}
            label={label}
            size="small"
            type={type}
          />
        )}
      />
      <p className="text-red-600 text-[10px] font-[800]">
        {errors[name]?.message as string}
      </p>
    </div>
  );
};

export default InputView;
