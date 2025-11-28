import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useCreateProjectMutation,
  useGetAllProjectsQuery,
} from "../services/projectApi";
import { projectValidationSchema } from "../validation/projectValidation";
import { AddProjectFormValues } from "../types/AddProjectTypes";
import { useAuth } from "../../auth/context/AuthProvider";
import { useGlobalAlert } from "../../../shared/sharedAlert/context/AlertContext";

interface FlexibleObject {
  [key: string]: any; // any key, any value
}
const useAddProjectController = () => {
  const [images, setImages] = useState<File[] | string[]>([]);
  const [createProject, { isLoading }] = useCreateProjectMutation();
  const { openAlert } = useGlobalAlert();

  const { userData } = useAuth();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    watch,
    reset,
    formState: { errors },
  } = useForm<AddProjectFormValues>({
    resolver: yupResolver(projectValidationSchema) as any,
    defaultValues: {
      name: "",
      image: undefined,
      description: "",
      visitLink: "",
      downloadLink: "",
      tech: "",
      userId: "",
    },
  });

  const onRemoveImage = useCallback(() => {
    // setImages((prev) => prev.filter((_, i) => i !== index));
    setValue("image", "");
    clearErrors("image");
  }, []);

  const onSubmit = async (data: FlexibleObject) => {
    try {
      console.log(data, "data===");

      if (!userData?.id) {
        return openAlert({
          message: "Please log in first to add a project.",
          severity: "error",
        });
      }

      // Create FormData
      const formData = new FormData();
      formData.append("userId", userData.id);
      formData.append("name", data.name);
      formData.append("description", data.description);

      if (data.image?.[0]) {
        formData.append("image", data.image[0]);
      }

      if (data.visitLink) {
        formData.append("visitLink", data.visitLink);
      }

      if (data.downloadLink) {
        formData.append("downloadLink", data.downloadLink);
      }

      // Append array values (like tags)
      if (Array.isArray(data.tech)) {
        data.tech.forEach((tag: string) => formData.append("tech", tag));
      }

      // Call API
      const response = await createProject(formData).unwrap();

      console.log(response, "response====");

      if (response.success) {
        openAlert({
          message: "Project added successfully!",
          severity: "success",
        });
        reset();
      } else {
        openAlert({
          message: "Failed to add project",
          severity: "error",
        });
      }
    } catch (err: any) {
      if (err?.data?.errors) {
        Object.entries(err.data.errors).forEach(([key, value]) => {
          setError(key as any, { message: String(value) });
        });
      }
      openAlert({
        message: "Failed to add project",
        severity: "error",
      });
    }
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
    register,
    errors,
    loading: isLoading,
    setValue,
    setError,
    clearErrors,
    images,
    onRemoveImage,
    imageName: null,
    watch,
  };
};

export default useAddProjectController;
