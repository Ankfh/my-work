import { Types } from "mongoose";

export interface ProjectInput {
  userId: Types.ObjectId | string;
  name: string;
  image: string;
  description: string;
  visitLink?: string;
  downloadLink?: string;
  tech?: string[];
}
