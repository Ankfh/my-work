import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddSkillInputs } from "../types/AddSkillTypes";
import { useGlobalAlert } from "../../../shared/sharedAlert/context/AlertContext";
import { useAuth } from "../../auth/context/AuthProvider";
import {
  useAddSkillMutation,
  useDeleteImageMutation,
  useGetSkillByIdQuery,
} from "../api/skillApi";
import { addSkillSchema } from "../services/addSkillSchema";
import { useEffect } from "react";
type addSkillControllerParamsType = {
  id: string | null | undefined;
};
const useAddSkillController = ({ id }: addSkillControllerParamsType) => {
  console.log(id, "id====");
  const { userData } = useAuth();
  const { openAlert } = useGlobalAlert();
  const [addSkill, { isLoading }] = useAddSkillMutation();
  const [deleteImage, { isLoading: deleteImageLaoding }] =
    useDeleteImageMutation();
  const {
    data: skillData,
    isLoading: isSkillLoading,
    error: skillError,
  } = useGetSkillByIdQuery({ id: id as string }, { skip: !id });
  console.log(skillData, "skillData");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
    reset,
    watch,
  } = useForm<AddSkillInputs>({
    resolver: yupResolver(addSkillSchema) as any,
    defaultValues: {
      name: "",
      proficiency: "Beginner",
      image: undefined,
    },
  });

  useEffect(() => {
    if (id && skillData?.data) {
      reset({
        name: skillData.data.name || "",
        proficiency: skillData.data.proficiency || "Beginner",
        image: skillData?.data?.image || undefined,
      });
    }
  }, [id, skillData, reset]);

  const onSubmitForm: SubmitHandler<AddSkillInputs> = async (formData) => {
    try {
      console.log(formData, "formData");
      if (!userData?.id)
        return openAlert({ message: "please logged in ", severity: "error" });
      const res = await addSkill({
        userId: userData?.id || "",
        name: formData.name,
        proficiency: formData.proficiency,
        image: formData.image,
      }).unwrap();

      if (res.success) {
        openAlert({
          message: "Skill added successfully!",
          severity: "success",
        });
        reset(); // reset clears all fields
      } else {
        openAlert({ message: "Failed to add skill", severity: "error" });
      }
    } catch (error) {
      console.error("Add skill error:", error);
      openAlert({ message: "Something went wrong", severity: "error" });
    }
  };
  // 🧹 Image remove handler
  const onRemoveImage = async () => {
    try {
      if (skillData?.data?.image) {
        const res = await deleteImage({
          type: "skills",
          imageName: skillData?.data?.image,
          id: skillData?.data?._id,
        }).unwrap();
        console.log(res);
        if (res?.success) {
          setValue("image", []);
          clearErrors("image");
        }
      } else {
        setValue("image", []);
        clearErrors("image");
      }
    } catch (error) {
      console.log("error in onRemoveImage :", error);
    }
  };
  return {
    control,
    register,
    errors,
    loading: isLoading,
    onSubmit: handleSubmit(onSubmitForm),
    setValue,
    setError,
    clearErrors,
    watch,
    onRemoveImage,
    skillData: skillData?.data,
    imageName: skillData?.data?.image,
  };
};

export default useAddSkillController;
