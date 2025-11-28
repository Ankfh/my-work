import React from "react";
import SignUpView from "../view/SignUpView";
import useSignUpStateController from "../controller/useSignUpStateController";

const SignUpContainer: React.FC = () => {
  const { register, onSubmit, errors, signUpLoading, control } =
    useSignUpStateController();

  return (
    <SignUpView
      onSubmit={onSubmit}
      control={control}
      errors={errors}
      signUpLoading={signUpLoading}
    />
  );
};

export default SignUpContainer;
