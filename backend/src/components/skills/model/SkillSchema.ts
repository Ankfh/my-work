import { Schema, model, Document, Types } from "mongoose";

// Define interface
export interface ISkill extends Document {
  userId: Types.ObjectId; // Who owns this skill
  name: string; // Skill name e.g. "JavaScript"
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert"; // Level
  yearsOfExperience?: number; // Optional experience
  image?: string; // Optional image filename
  createdAt: Date;
  updatedAt: Date;
}

// Define schema
const SkillSchema = new Schema<ISkill>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    proficiency: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
      required: true,
    },
    yearsOfExperience: { type: Number },
    image: { type: String }, // New image field instead of icon
  },
  { timestamps: true }
);

// Export model
export const SkillModel = model<ISkill>("Skill", SkillSchema);
