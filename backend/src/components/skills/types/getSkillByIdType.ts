import { Request } from "express";
import { Response } from "express";

export type GetSkillByIdRequest = Request<{ id: string }>;

// Generic API response type
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// Express response with ApiResponse generic
export type ApiResponseExpress<T = unknown> = Response<ApiResponse<T>>;
