// validation/assistantValidation.ts
import * as yup from "yup";

export const assistantSchema = yup.object({
  message: yup.string().required("Message is required"),
});
