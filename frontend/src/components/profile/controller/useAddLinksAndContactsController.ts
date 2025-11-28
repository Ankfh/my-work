import { useForm, SubmitHandler } from "react-hook-form";
import { AddLinksAndContactsInputs } from "../types/AddLinksAndContactsTypes";
import { useNavigate } from "react-router-dom";
import { useGlobalAlert } from "../../../shared/sharedAlert/context/AlertContext";
import { useAuth } from "../../auth/context/AuthProvider";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../api/profileApi";
import { useEffect } from "react";

const useAddLinksAndContactsController = () => {
  const { userData } = useAuth();
  const { openAlert } = useGlobalAlert();
  const navigate = useNavigate();
  const { data: profileData } = useGetProfileQuery({
    userId: userData?.id || "",
  });
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
    reset,
  } = useForm<AddLinksAndContactsInputs>({
    defaultValues: {
      github: "",
      linkedin: "",
      upwork: "",
      fiver: "",
      email: "",
      phone: "",
    },
  });
  useEffect(() => {
    if (profileData?.data) {
      reset({
        github: profileData?.data?.socialLinks?.github || "",
        linkedin: profileData?.data?.socialLinks?.linkedin || "",
        upwork: profileData?.data?.socialLinks?.upwork || "",
        fiver: profileData?.data?.socialLinks?.fiver || "",
        email: profileData?.data?.contacts?.email || "",
        phone: profileData?.data?.contacts?.phone || "",
      });
    }
  }, [profileData, reset]);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const onSubmitForm: SubmitHandler<AddLinksAndContactsInputs> = async (
    formData
  ) => {
    try {
      const result = await updateProfile({
        userId: userData?.id || "",
        name: profileData?.data?.name || "",
        profession: profileData?.data?.profession || "",
        socialLinks: {
          github: formData.github,
          linkedin: formData.linkedin,
          upwork: formData.upwork,
          fiver: formData.fiver,
        },
        contacts: {
          email: formData.email,
          phone: formData.phone,
        },
      }).unwrap();

      if (result.success) {
        openAlert({
          message: "Links & contacts updated!",
          severity: "success",
        });
        navigate("/profile");
      } else {
        openAlert({ message: "Update failed", severity: "error" });
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      openAlert({ message: "Something went wrong", severity: "error" });
    }
  };

  return {
    control,
    errors,
    register,
    onSubmit: handleSubmit(onSubmitForm),
    setError,
    setValue,
    clearErrors,
    loading: isLoading,
  };
};

export default useAddLinksAndContactsController;
