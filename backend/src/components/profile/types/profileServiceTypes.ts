// src/types/profileServiceTypes.ts
import { Types } from "mongoose";

export interface CreateProfileParams {
  userId: Types.ObjectId | string;
  name: string;
  profession: string;
  image: string;
  socialLinks?: {
    github?: string | null;
    linkedin?: string | null;
    upwork?: string | null;
    fiverr?: string | null;
  };
  contacts?: {
    email?: string | null;
    phone?: string | null;
  };
}

export interface GetProfileByUserIdParams {
  userId: Types.ObjectId | string;
}

export interface UpdateProfileParams {
  profileId: string;
  updates: Partial<{
    name: string;
    profession: string;
    image: string;
    socialLinks: {
      github?: string | null;
      linkedin?: string | null;
      upwork?: string | null;
      fiverr?: string | null;
    };
    contacts: {
      email?: string | null;
      phone?: string | null;
    };
  }>;
}



export interface UpdateProfileByUserIdParams {
  userId: string;
  updates: Partial<{
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
  }>;
}

