// src/components/profile/services/addProfileValidation.ts
import * as yup from "yup";

export const addProfileSchema = yup.object({
  name: yup.string().required("Name is required"),
  profession: yup.string().required("Profession is required"),
  image: yup
    .array()
    .of(yup.mixed<File>().required())
    .min(1, "Image is required")
    .required("Image is required"),
});