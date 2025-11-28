import React from "react";
import { Controller } from "react-hook-form";
import { TagInputProps, TagInputViewProps } from "../types/TagInputTypes";
import useTagInputController from "../hooks/useTagInputController";

const TagInputView: React.FC<TagInputProps> = ({
  name,
  control,
  label,
  errors,
}) => {
  return (
    <div className="w-full">
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <TagInput
            label={label}
            value={field.value || []}
            onChange={field.onChange}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-600 text-[10px] font-[800] mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

const TagInput: React.FC<TagInputViewProps> = ({
  label,
  value = [],
  onChange,
}) => {
  const { inputValue, setInputValue, handleAddTag, handleRemoveTag } =
    useTagInputController(value, onChange);

  return (
    <div className="w-full">
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <div className="flex flex-wrap items-center gap-2 border rounded-xl p-2 bg-white shadow-sm focus-within:ring-2 ring-blue-400">
        {value.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleRemoveTag(tag)}
              className="ml-2 text-xs text-red-600 hover:text-red-800"
            >
              ✕
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              handleAddTag();
            }
          }}
          placeholder="Type and press Enter..."
          className="flex-1 outline-none text-sm bg-transparent"
        />
      </div>
    </div>
  );
};

export default TagInputView;
