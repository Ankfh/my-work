// src/components/profile/container/AddProfileContainer.tsx
import React from "react";
import useAddProfileStateController from "../controller/useAddProfileStateController";
import AddProfileView from "../view/ProfileView";

const AddProfileContainer: React.FC = () => {
  const { control, errors, onSubmit, register, profileLoading, setError, setValue, clearErrors, watch } =
    useAddProfileStateController();

  return (
    <AddProfileView
      control={control}
      errors={errors}
      onSubmit={onSubmit}
      register={register}
      profileLoading={profileLoading}
      setError={setError}
      setValue={setValue}
      clearErrors={clearErrors}
      images={watch("image") as File[]}
    />
  );
};

export default AddProfileContainer;
