import { Types } from "mongoose";
import {
  ApiResponseExpress,
  GetSkillByIdRequest,
} from "../types/getSkillByIdType";
import { SkillModel } from "../model/SkillSchema";

export const getSkillByIdController = async (
  req: GetSkillByIdRequest,
  res: ApiResponseExpress
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ success: false, error: "Skill Id is required" });
      return;
    }

    const skillId = new Types.ObjectId(id);
    const skill = await SkillModel.findById(skillId);

    if (!skill) {
      res.status(404).json({ success: false, error: "Skill not found" });
      return;
    }

    res.status(200).json({ success: true, data: skill });
  } catch (error) {
    console.error("Error in getSkillByIdController:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
