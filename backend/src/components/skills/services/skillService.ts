// src/services/skillService.ts

import { SkillModel } from "../model/SkillSchema";
import {
  CreateSkillParams,
  UpdateSkillParams,
  GetSkillsByUserIdParams,
} from "../types/skillServiceTypes";

export const createSkill = async ({
  userId,
  name,
  proficiency,
  yearsOfExperience,
  image,
}: CreateSkillParams) => {
  try {
    const skill = new SkillModel({
      userId,
      name,
      proficiency,
      yearsOfExperience,
      image,
    });
    return await skill.save();
  } catch (error) {
    console.error("Error in createSkill", error);
    throw error instanceof Error ? error : new Error("Unknown error occurred");
  }
};

export const updateSkill = async ({
  skillId,
  name,
  proficiency,
  yearsOfExperience,
  image,
}: UpdateSkillParams & { skillId: string }) => {
  try {
    return await SkillModel.findByIdAndUpdate(
      skillId,
      {
        name,
        proficiency,
        yearsOfExperience,
        image,
      },
      { new: true }
    );
  } catch (error) {
    console.error("Error in updateSkill", error);
    throw error instanceof Error ? error : new Error("Unknown error occurred");
  }
};

export const deleteSkill = async (skillId: string) => {
  try {
    return await SkillModel.findByIdAndDelete(skillId);
  } catch (error) {
    console.error("Error in deleteSkill", error);
    throw error instanceof Error ? error : new Error("Unknown error occurred");
  }
};

export const getSkillsByUserId = async ({
  userId,
}: GetSkillsByUserIdParams) => {
  try {
    return await SkillModel.find({ userId });
  } catch (error) {
    console.error("Error in getSkillsByUserId", error);
    throw error instanceof Error ? error : new Error("Unknown error occurred");
  }
};

export const getAllSkills = async () => {
  try {
    return await SkillModel.find().populate("userId");
  } catch (error) {
    console.error("Error in getAllSkills", error);
    throw error instanceof Error ? error : new Error("Unknown error occurred");
  }
};
