import { Request, Response } from "express";
import { getProjectsByUserId } from "../services/projectService";

export const getProjectsController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ success: false, message: "userId is required." });
    }
    const projects = await getProjectsByUserId({ userId });
    res.status(200).json({ success: true, data: projects });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
