// src/models/ProfileModel.ts
import { Schema, model, Document, Types } from "mongoose";

export interface IProfile extends Document {
  userId: Types.ObjectId;
  name: string;
  profession: string;
  image: string;
  socialLinks: {
    github?: string | null;
    linkedin?: string | null;
    upwork?: string | null;
    fiver?: string | null;
  };
  contacts: {
    email?: string | null;
    phone?: string | null;
  };
}

const ProfileSchema = new Schema<IProfile>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // 👈 This references your User model
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    socialLinks: {
      github: { type: String, default: null },
      linkedin: { type: String, default: null },
      upwork: { type: String, default: null },
      fiver: { type: String, default: null },
    },
    contacts: {
      email: { type: String, default: null },
      phone: { type: String, default: null },
    },
  },
  {
    timestamps: true,
  }
);

const ProfileModel = model<IProfile>("Profile", ProfileSchema);

export default ProfileModel;
