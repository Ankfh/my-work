import React from "react";
import { AddLinksAndContactsViewProps } from "../types/AddLinksAndContactsTypes";
import InputContainer from "../../../shared/Input/Container/InputContainer";
import MuiButton from "../../../shared/sharedButton/view/SharedButtonView";

const AddLinksAndContactsView: React.FC<AddLinksAndContactsViewProps> = ({
  onSubmit,
  control,
  errors,
  register,
  loading,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-2xl shadow space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">
          Add Social Links & Contacts
        </h2>

        <InputContainer
          name="github"
          label="GitHub"
          control={control}
          type="text"
          errors={errors}
        />
        <InputContainer
          name="linkedin"
          label="LinkedIn"
          control={control}
          type="text"
          errors={errors}
        />
        <InputContainer
          name="upwork"
          label="Upwork"
          control={control}
          type="text"
          errors={errors}
        />
        <InputContainer
          name="fiver"
          label="Fiver"
          control={control}
          type="text"
          errors={errors}
        />

        <InputContainer
          name="email"
          label="Email"
          control={control}
          type="email"
          errors={errors}
        />
        <InputContainer
          name="phone"
          label="Phone"
          control={control}
          type="tel"
          errors={errors}
        />

        <MuiButton
          title="Save Links & Contacts"
          loading={loading}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddLinksAndContactsView;
