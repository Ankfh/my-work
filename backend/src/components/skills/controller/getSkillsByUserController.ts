import { Response } from "express";
import { Types } from "mongoose";
import { GetSkillsByUserRequest } from "../types/skillControllerTypes";
import { getSkillsByUserId } from "../services/skillService";

export const getSkillsByUserController = async (
  req: GetSkillsByUserRequest,
  res: Response
) => {
  try {
    const userId = new Types.ObjectId(req.params.userId);

    const skills = await getSkillsByUserId({ userId });

    res.status(200).json({
      data: skills,
      success: true,
    });
  } catch (error) {
    console.error("Error in getSkillsByUserController:", error);
    res.status(500).json({ error: "Internal server error", success: false });
  }
};
