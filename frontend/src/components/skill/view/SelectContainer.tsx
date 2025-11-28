import React from "react";
import { Controller } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  label: string;
  control: any;
  errors: any;
  options: Option[];
}

const SelectContainer: React.FC<SelectProps> = ({
  name,
  label,
  control,
  errors,
  options,
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-gray-700">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            {...field}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};

export default SelectContainer;
