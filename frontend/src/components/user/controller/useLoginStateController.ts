// src/components/login/hooks/useLoginStateController.ts
import { LoginFormInputs } from "../types/loginTypes";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../services/loginValidation";
import { useLoginUserMutation } from "../api/userApi";
import { UseLoginStateControllerResult } from "../types/UseLoginStateControllerResult";
import { SetBackendValidation } from "../../../shared/FileInput/services/ManulValidation";
import { useAuth } from "../../auth/context/AuthProvider";
import { useGlobalAlert } from "../../../shared/sharedAlert/context/AlertContext";
import { useNavigate } from "react-router-dom";

const useLoginStateController = (): UseLoginStateControllerResult => {
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const { dispatchAuthLogin } = useAuth();
  const { openAlert } = useGlobalAlert();
  const navigate = useNavigate();

  const onSubmitForm: SubmitHandler<LoginFormInputs> = async (formData) => {
    try {
      const result = await loginUser(formData).unwrap();
      if (result?.success) {
        const userPayload = {
          userData: {
            id: result.user?.id || "",
            email: result.user?.email || "",
            userName: result.user?.userName || "",
          },
          token: result.token || "",
          isLogin: true,
        };

        // 🔐 Update context
        dispatchAuthLogin({ loginData: userPayload });

        // 💾 Save to localStorage
        localStorage.setItem("user_data", JSON.stringify(userPayload));
        navigate("/"); // ✅ no delay needed
      } else {
        openAlert({ message: "Signup successful!", severity: "error" });
      }
      console.log(result, "loginResult");
    } catch (err: any) {
      console.error("🚨 Login failed:", err);
      if (err?.data?.type === "PASSWORD_MISMATCH") {
        SetBackendValidation(setError, "password", "Password is incorrect");
      }
    }
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmitForm),
    errors,
    loginLoading: isLoading,
    control,
  };
};

export default useLoginStateController;
