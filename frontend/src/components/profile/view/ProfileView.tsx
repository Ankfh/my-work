// src/components/profile/view/AddProfileView.tsx
import React from "react";
import { AddProfileViewProps } from "../types/AddProfileTypes";
import InputContainer from "../../../shared/Input/Container/InputContainer";
import MuiButton from "../../../shared/sharedButton/view/SharedButtonView";
import FileInputContainer from "../../../shared/FileInput/container/FileInputContainer";

const AddProfileView: React.FC<AddProfileViewProps> = ({
  onSubmit,
  control,
  errors,
  register,
  profileLoading,
  setError,
  setValue,
  clearErrors,
  images,
}) => {
  return (
    <div className="bg-purple-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Create Profile
          </h1>

          <form onSubmit={onSubmit} className="space-y-5">
            <FileInputContainer
              control={control}
              name="image"
              label="Profile Image"
              setValue={setValue}
              setError={setError}
              clearErrors={clearErrors}
              errorMessage="Only image files allowed"
              errors={errors}
              images={images}
            />
            <InputContainer
              name="name"
              label="Name"
              control={control}
              type="text"
              errors={errors}
            />
            <InputContainer
              name="profession"
              label="Profession"
              control={control}
              type="text"
              errors={errors}
            />

            <MuiButton
              title="Save Profile"
              loading={profileLoading}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfileView;
