import { Response } from "express";
import { UpdateSkillRequest } from "../types/skillControllerTypes";
import { updateSkill } from "../services/skillService";

export const updateSkillController = async (
  req: UpdateSkillRequest,
  res: Response
) => {
  try {
    const { skillId, name, proficiency, yearsOfExperience, image } = req.body;

    const skill = await updateSkill({
      skillId,
      name,
      proficiency,
      yearsOfExperience,
      image,
    });

    res
      .status(200)
      .json({ message: "Skill updated", data: skill, success: true });
  } catch (error) {
    console.error("Error in updateSkillController:", error);
    res.status(500).json({ error: "Internal server error", success: false });
  }
};
