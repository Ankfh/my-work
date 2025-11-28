import { Request, Response } from "express";

export interface DeleteSkillRequestBody {
  id: string; // Skill ID
}

export interface DeleteSkillResponse {
  success: boolean;
  message: string;
}

export type DeleteSkillRequest = Request<{}, {}, DeleteSkillRequestBody>;
export type DeleteSkillResponseType = Response<DeleteSkillResponse>;
