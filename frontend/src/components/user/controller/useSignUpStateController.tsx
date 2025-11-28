// src/components/signup/hooks/useSignUpStateController.ts
import { SignupFormInputs } from "../types/signupType";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../services/signupValidation";
import { UseSignUpStateControllerResult } from "../types/UseSignUpStateControllerResult";
import { useRegisterUserMutation } from "../api/userApi";
import { SetBackendValidation } from "../../../shared/FileInput/services/ManulValidation";
import { useAlert } from "../../../shared/sharedAlert/hook/useAlert";
import { useNavigate } from "react-router-dom";
import { useGlobalAlert } from "../../../shared/sharedAlert/context/AlertContext";

const useSignUpStateController = (): UseSignUpStateControllerResult => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<SignupFormInputs>({
    resolver: yupResolver(signupSchema),
  });
  const { openAlert } = useGlobalAlert();
  const navigate = useNavigate();

  const onSubmitForm: SubmitHandler<SignupFormInputs> = async (formData) => {
    try {
      const result = await registerUser(formData).unwrap();

      if (result?.success) {
        openAlert({ message: "Signup successful!", severity: "success" });
        navigate("/login"); // ✅ no delay needed
      }
    } catch (err: any) {
      const errorType = err?.data?.type;

      if (errorType === "EMAIL_IN_USE") {
        SetBackendValidation(setError, "email", "This email is already in use");
      } else {
        openAlert({
          message: "Something went wrong. Please try again.",
          severity: "error",
        });
      }
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmitForm),
    errors,
    signUpLoading: isLoading,
    control,
  };
};

export default useSignUpStateController;
