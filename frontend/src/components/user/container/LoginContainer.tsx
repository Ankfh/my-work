// src/components/login/container/LoginContainer.tsx
import React from "react";
import LoginView from "../view/LoginView";
import useLoginStateController from "../controller/useLoginStateController";

const LoginContainer: React.FC = () => {
  const { register, onSubmit, errors, loginLoading, control } =
    useLoginStateController();

  return (
    <LoginView
      onSubmit={onSubmit}
      control={control}
      errors={errors}
      loginLoading={loginLoading}
    />
  );
};

export default LoginContainer;
