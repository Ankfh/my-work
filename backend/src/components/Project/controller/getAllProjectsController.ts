import { Request, Response, RequestHandler } from "express";
import { ProjectModel } from "../model/ProjectModel";

export const getAllProjectsController: RequestHandler = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    console.log(projects, "projects===");

    res.status(200).json({
      success: true,
      data: projects || [],
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
      error: (error as Error).message,
    });
  }
};
