import { RequestHandler } from "express";
import { createProject } from "../services/projectService";
import { CreateProjectRequest } from "../types/projectRequestTypes";

export const createProjectController: RequestHandler = async (
  req: CreateProjectRequest,
  res
) => {
  try {
    const { userId, name, description, visitLink, downloadLink, tech } =
      req.body;
    console.log(req.body, "req.body-===");
    const imageFilename = req.file?.filename || "";
    console.log(imageFilename, "imageFilename==");
    if (!userId || !name || !description) {
      res.status(400).json({
        success: false,
        message: "userId, name, image, and description are required.",
      });
      return;
    }

    const project = await createProject({
      userId,
      name,
      image: imageFilename,
      description,
      visitLink,
      downloadLink,
      tech,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error: any) {
    console.log(error, "error in createProjectController");
    res.status(500).json({ success: false, message: error.message });
  }
};
