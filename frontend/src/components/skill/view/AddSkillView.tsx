import React from "react";
import { AddSkillViewProps } from "../types/AddSkillTypes";
import InputContainer from "../../../shared/Input/Container/InputContainer";
import MuiButton from "../../../shared/sharedButton/view/SharedButtonView";
import SelectContainer from "./SelectContainer";
import FileInputContainer from "../../../shared/FileInput/container/FileInputContainer";

const AddSkillView: React.FC<AddSkillViewProps> = ({
  onSubmit,
  control,
  errors,
  register,
  loading,
  setValue,
  setError,
  clearErrors,
  images,
  onRemoveImage,
  isEdit,
}) => {
  console.log(images, "images==");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Add Skill</h2>

        <InputContainer
          name="name"
          label="Skill Name"
          type="text"
          control={control}
          errors={errors}
        />

        <SelectContainer
          name="proficiency"
          label="Proficiency"
          control={control}
          errors={errors}
          options={[
            { value: "Beginner", label: "Beginner" },
            { value: "Intermediate", label: "Intermediate" },
            { value: "Advanced", label: "Advanced" },
            { value: "Expert", label: "Expert" },
          ]}
        />

        <FileInputContainer
          name="image"
          label="Skill Image"
          control={control}
          errors={errors}
          setValue={setValue}
          setError={setError}
          clearErrors={clearErrors}
          images={images}
          onRemoveImage={onRemoveImage}
          isEdit={isEdit}
        />

        <MuiButton title="Add Skill" loading={loading} type="submit" />
      </form>
    </div>
  );
};

export default AddSkillView;
