// addSkillSchema.ts
import * as yup from "yup";

export const addSkillSchema = yup.object({
  name: yup.string().required("Skill name is required"),
  proficiency: yup
    .string()
    .oneOf(["Beginner", "Intermediate", "Advanced", "Expert"])
    .required("Proficiency is required"),
  image: yup
    .array()
    .of(yup.mixed<File>().required())
    .min(1, "Image is required")
    .required("Image is required"),
});
