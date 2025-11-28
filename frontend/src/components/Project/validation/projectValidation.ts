import * as yup from "yup";

export const projectValidationSchema = yup.object({
  name: yup
    .string()
    .required("Project name is required")
    .min(2, "Minimum 2 characters"),
  image: yup
    .array()
    .of(yup.mixed<File>().required())
    .min(1, "Image is required")
    .required("Image is required"),
  description: yup
    .string()
    .required("Description is required")
    .min(10, "Minimum 10 characters"),
  // visitLink: yup.string(),
  // downloadLink: yup.string(),
  // tech: yup.string(),
});
