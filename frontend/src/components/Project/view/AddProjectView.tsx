import React from "react";
import { AddProjectViewProps } from "../types/AddProjectTypes";
import InputContainer from "../../../shared/Input/Container/InputContainer";
import FileInputContainer from "../../../shared/FileInput/container/FileInputContainer";
import MuiButton from "../../../shared/sharedButton/view/SharedButtonView";
import TagInputView from "../../../shared/Input/View/TagInputView";

const AddProjectView: React.FC<AddProjectViewProps> = ({
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
  const normalizedImages =
    images instanceof File
      ? [images]
      : Array.isArray(images)
      ? images
      : undefined;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Add Project</h2>

        <InputContainer
          name="name"
          label="Project Name"
          type="text"
          control={control}
          errors={errors}
        />
        <InputContainer
          name="visitLink"
          label="Visit Link (optional)"
          type="text"
          control={control}
          errors={errors}
        />
        <InputContainer
          name="downloadLink"
          label="Download Link (optional)"
          type="text"
          control={control}
          errors={errors}
        />
        <TagInputView
          name="tech"
          label="Technologies"
          control={control}
          errors={errors}
        />
        <InputContainer
          name="description"
          label="Description"
          type="textarea"
          control={control}
          errors={errors}
        />

        <FileInputContainer
          name="image"
          label="Project Image"
          control={control}
          errors={errors}
          setValue={setValue}
          setError={setError}
          clearErrors={clearErrors}
          images={normalizedImages}
          onRemoveImage={onRemoveImage}
          isEdit={isEdit}
        />

        <div className="pt-4">
          <MuiButton
            title={loading ? "Creating..." : "Create Project"}
            loading={loading}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProjectView;
