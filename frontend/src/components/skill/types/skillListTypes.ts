export interface Skill {
  _id: string;
  userId: string;
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience?: number;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetSkillsByUserArgs {
  userId: string;
}

export interface GetSkillsByUserResponse {
  success: boolean;
  data: Skill[];
}

export interface SkillsListViewProps {
  skills: Skill[];
  loading: boolean;
  error?: string;
  onRefresh?: () => void;
  imageBaseUrl: string;
  handleDeleteSkill: (skillId: string) => void;
}

export interface SkillCardProps {
  skill: Skill;
  imageBaseUrl: string;
  handleDeleteSkill: (skillId: string) => void;

}
