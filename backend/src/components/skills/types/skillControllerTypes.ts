import { Request } from "express";
import { CreateSkillParams, UpdateSkillParams } from "./skillServiceTypes";

export type CreateSkillRequest = Request<{}, {}, CreateSkillParams>;
export type UpdateSkillRequest = Request<{}, {}, UpdateSkillParams & { skillId: string }>;
export type DeleteSkillRequest = Request<{ skillId: string }>;
export type GetSkillsByUserRequest = Request<{ userId: string }>;
