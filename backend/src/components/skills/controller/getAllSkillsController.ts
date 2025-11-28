import { Request, Response } from "express";
import { getAllSkills } from "../services/skillService";

export const getAllSkillsController = async (_req: Request, res: Response) => {
  try {
    const skills = await getAllSkills();
    res.status(200).json({ data: skills, success: true });
  } catch (error) {
    console.error("Error in getAllSkillsController:", error);
    res.status(500).json({ error: "Internal server error", success: false });
  }
};
