import { Response } from "express";
import { Types } from "mongoose";
import { CreateSkillRequest } from "../types/skillControllerTypes";
import { createSkill } from "../services/skillService";

export const createSkillController = async (
  req: CreateSkillRequest,
  res: Response
) => {
  try {
    const userId = new Types.ObjectId(req.body.userId);
  console.log(req.body , 'req.body===')
    // Extract uploaded image filename if available
    const imageFilename = req.file?.filename || "";
    console.log(imageFilename, "imageFilename");
    console.log(req.body, "req.body");
    const skill = await createSkill({
      userId,
      name: req.body.name,
      proficiency: req.body.proficiency,
      yearsOfExperience: req.body.yearsOfExperience
        ? Number(req.body.yearsOfExperience)
        : undefined,
      image: imageFilename,
    });

    res.status(200).json({
      message: "Skill created",
      data: skill,
      success: true,
    });
  } catch (error) {
    console.error("Error in createSkillController:", error);
    res.status(500).json({ error: "Internal server error", success: false });
  }
};
