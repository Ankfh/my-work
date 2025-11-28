export interface AddSkillInputs {
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  image: File[] | string; // new: optional file or existing filename
}

export interface AddSkillViewProps {
  onSubmit: () => void;
  control: any;
  errors: any;
  register: any;
  loading: boolean;
  setValue: any;
  setError: any;
  clearErrors: any;
  images: File[];
  isEdit: boolean;
  onRemoveImage?: () => void;
}

export interface SkillFormData {
  userId: string;
  name: string;
  proficiency: string;
  image: File[] | string; // ← can be File (new) or string (filename)
}
