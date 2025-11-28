import { Request, Response } from "express";

export interface DeleteImageRequestBody {
  type: string; // e.g. "skills"
  imageName: string; // file name
  id?: string; // skillId if type = "skills"
}

export interface DeleteImageResponse {
  success: boolean;
  message: string;
  imageName?: string;
}

// Correct types for req & res
export type DeleteImageRequest = Request<{}, {}, DeleteImageRequestBody>;
export type DeleteImageResponseType = Response<DeleteImageResponse>;
