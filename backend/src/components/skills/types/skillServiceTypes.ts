import { Types } from "mongoose";

export interface CreateSkillParams {
  userId: Types.ObjectId;
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience?: number;
  image?: string; // New image filename
}

export interface UpdateSkillParams {
  name: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  yearsOfExperience?: number;
  image?: string; // Optional in update
}

export interface GetSkillsByUserIdParams {
  userId: Types.ObjectId; // You could also use Types.ObjectId if preferred
}
