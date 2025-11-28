// src/components/login/view/LoginView.tsx
import React from "react";
import { LoginViewProps } from "../types/loginTypes";
import InputContainer from "../../../shared/Input/Container/InputContainer";
import MuiButton from "../../../shared/sharedButton/view/SharedButtonView";

const LoginView: React.FC<LoginViewProps> = ({
  onSubmit,
  control,
  errors,
  loginLoading,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Login to your account</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <InputContainer
            name="email"
            label="Email"
            control={control}
            type="email"
            errors={errors}
          />
          <InputContainer
            name="password"
            label="Password"
            control={control}
            type="password"
            errors={errors}
          />

          <MuiButton type="submit" title="Login" loading={loginLoading} />
        </form>

        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
