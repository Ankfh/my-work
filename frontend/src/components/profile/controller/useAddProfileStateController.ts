// src/components/profile/controller/useAddProfileStateController.ts
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addProfileSchema } from "../services/addProfileValidation";
import {
  AddProfileFormInputs,
  UseAddProfileStateControllerResult,
} from "../types/AddProfileTypes";
import { useNavigate } from "react-router-dom";
import { useAddProfileMutation, useGetProfileQuery } from "../api/profileApi";
import { useGlobalAlert } from "../../../shared/sharedAlert/context/AlertContext";
import { useAuth } from "../../auth/context/AuthProvider";
import { useEffect } from "react";

const useAddProfileStateController = (): UseAddProfileStateControllerResult => {
  const { userData } = useAuth();
  const { data: profileData } = useGetProfileQuery({
    userId: userData?.id || "",
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
    watch,
    reset,
  } = useForm<AddProfileFormInputs>({
    resolver: yupResolver(addProfileSchema),
    defaultValues: {
      name: profileData?.data?.name || "",
      profession: profileData?.data?.profession || "",

      image: [],
    },
  });
  const { openAlert } = useGlobalAlert();

  const [addProfile, { isLoading }] = useAddProfileMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (profileData?.data) {
      reset({
        name: profileData.data.name || "",
        profession: profileData.data.profession || "",
        image: [], // Keep image empty if it's file input
      });
    }
  }, [profileData, reset]);
  const onSubmitForm: SubmitHandler<AddProfileFormInputs> = async (
    formData
  ) => {
    try {
      const result = await addProfile({
        ...formData,
        userId: userData?.id || "",
      }).unwrap();
      if (result.success) {
        openAlert({
          message: "Profile added successfully!",
          severity: "success",
        });
        navigate("/profile");
      } else {
        openAlert({ message: "Something went wrong", severity: "error" });
      }
    } catch (err) {
      console.error("Failed to add profile:", err);
      openAlert({ message: "Something went wrong", severity: "error" });
    }
  };

  return {
    control,
    errors,
    onSubmit: handleSubmit(onSubmitForm),
    register,
    profileLoading: isLoading,
    setError,
    setValue,
    clearErrors,
    watch,
  };
};

export default useAddProfileStateController;
