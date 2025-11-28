import { SkillModel } from "../model/SkillSchema";
import { Types } from "mongoose";

export const updateSkillImageById = async (
  skillId: Types.ObjectId | string,
  newImage: string | null
) => {
  return await SkillModel.findByIdAndUpdate(
    skillId,
    { image: newImage },
    { new: true }
  );
};
