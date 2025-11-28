import { Request, Response } from "express";
import { updateProject } from "../services/projectService";

export const updateProjectController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, image, description, visitLink, downloadLink, tech } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, message: "Project ID is required." });
    }
    if (!name && !image && !description && !visitLink && !downloadLink && !tech) {
      return res.status(400).json({ success: false, message: "At least one field is required to update." });
    }
    const updated = await updateProject({ id, data: { name, image, description, visitLink, downloadLink, tech } });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Project not found." });
    }
    res.status(200).json({ success: true, message: "Project updated successfully", data: updated });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
