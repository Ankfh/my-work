import { Response } from "express";
import { DeleteSkillRequest } from "../types/skillControllerTypes";
import { deleteSkill } from "../services/skillService";

export const deleteSkillController = async (
  req: DeleteSkillRequest,
  res: Response
) => {
  try {
    const deleted = await deleteSkill(req.params.skillId);
    if (!deleted) {
      res.status(404).json({ error: "Skill not found", success: false });
      return;
    }

    res.status(200).json({ message: "Skill deleted", success: true });
  } catch (error) {
    console.error("Error in deleteSkillController:", error);
    res.status(500).json({ error: "Internal server error", success: false });
  }
};
