import { Schema, model, Document, Types } from "mongoose";

export interface IProject extends Document {
  userId: Types.ObjectId;
  name: string;
  image: string;
  description: string;
  visitLink?: string;
  downloadLink?: string;
  tech?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    visitLink: { type: String },
    downloadLink: { type: String },
    tech: [{ type: String }],
  },
  { timestamps: true }
);

export const ProjectModel = model<IProject>("Project", ProjectSchema);
