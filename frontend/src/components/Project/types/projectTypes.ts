import { Types } from "mongoose";

export interface ProjectInput {
  userId: Types.ObjectId;
  name: string;
  image: string;
  description: string;
  visitLink?: string;
  downloadLink?: string;
  tech?: string[];
}
