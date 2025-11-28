import { ProjectModel } from "../model/ProjectModel";
import { ProjectInput } from "../types/projectTypes";

export const createProject = async ({
  userId,
  name,
  image,
  description,
  visitLink,
  downloadLink,
  tech,
}: ProjectInput) => {
  const project = new ProjectModel({
    userId,
    name,
    image,
    description,
    visitLink,
    downloadLink,
    tech,
  });
  return await project.save();
};

export const getProjectsByUserId = async ({ userId }: { userId: string }) => {
  return await ProjectModel.find({ userId }).sort({ createdAt: -1 });
};

export const updateProject = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<ProjectInput>;
}) => {
  return await ProjectModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProject = async ({ id }: { id: string }) => {
  return await ProjectModel.findByIdAndDelete(id);
};
