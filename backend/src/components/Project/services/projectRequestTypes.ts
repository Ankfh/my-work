import { Request } from "express";
import {
  CreateProjectParams,
  UpdateProjectParams,
} from "./projectServiceTypes";

export type CreateProjectRequest = Request<{}, {}, CreateProjectParams>;

export type UpdateProjectRequest = Request<
  { projectId: string },
  {},
  UpdateProjectParams
>;

export type DeleteProjectRequest = Request<{ projectId: string }>;

export type GetProjectsByUserRequest = Request<{ userId: string }>;
