// src/components/profile/types/AddProfileApiTypes.ts
export interface AddProfileArgs {
    name: string;
    profession: string;
    image: File[]; // Only one image used (first one)
    userId: string; // Add userId her
  }
  
  export interface AddProfileResponse {
    success: boolean;
    message: string;
    profileId?: string;
  }
  

  export interface GetProfileArgs {
    userId: string;
  }
  
// src/components/profile/types/ProfileData.ts
export interface ProfileData {
  _id: string;
  userId: string; // ✅ it's just an ID (not a populated object)
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

  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetProfileResponse {
  success: boolean;
  data: ProfileData;
}