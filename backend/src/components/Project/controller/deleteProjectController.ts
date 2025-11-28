import { Request, Response } from "express";
import { deleteProject } from "../services/projectService";

export const deleteProjectController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ success: false, message: "Project ID is required." });
    }
    const deleted = await deleteProject({ id });
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Project not found." });
    }
    res.status(200).json({ success: true, message: "Project deleted successfully." });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
