import fs from "fs";
import path from "path";
import { DeleteImageRequest, DeleteImageResponse } from "../types/deleteImageTypes";
import { Response } from "express";
import { updateSkillImageById } from "../services/updateSkillImageById";

export const deleteImageController = async (
  req: DeleteImageRequest,
  res: Response<DeleteImageResponse>
): Promise<void> => {
  try {
    const { type, imageName, id } = req.body;
console.log(type, imageName, id , 'type, imageName, id==')
    if (!imageName) {
      res.status(400).json({
        success: false,
        message: "Image name is required",
      });
      return;
    }

    const imagePath = path.join(process.cwd(), "media", type, imageName);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    if (type === "skills") {
      if (!id) {
        res.status(400).json({
          success: false,
          message: "Skill ID is required for deleting skill images",
        });
        return;
      }
      await updateSkillImageById(id, null);
    }

    res.json({
      success: true,
      message: "Image deleted successfully",
      imageName,
    });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting image",
    });
  }
};
