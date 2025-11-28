// src/services/profileService.ts
import ProfileModel from "../model/ProfileModel";
import {
  CreateProfileParams,
  UpdateProfileParams,
  GetProfileByUserIdParams,
  UpdateProfileByUserIdParams,
} from "../types/profileServiceTypes";

export const updateProfileByUserId = async ({
  userId,
  updates,
}: UpdateProfileByUserIdParams) => {
  try {
    const updated = await ProfileModel.findOneAndUpdate({ userId }, updates, {
      new: true,
    });
    return updated;
  } catch (error) {
    console.error("Error in updateProfileByUserId", error);
    throw error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
};
export const createProfile = async ({
  userId,
  name,
  profession,
  image,
  socialLinks,
  contacts,
}: CreateProfileParams) => {
  try {
    const profile = new ProfileModel({
      userId,
      name,
      profession,
      image,
      socialLinks,
      contacts,
    });
    return await profile.save();
  } catch (error) {
    console.error(error, "Error in createProfile");
    throw error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
};

export const getProfileByUserId = async ({
  userId,
}: GetProfileByUserIdParams) => {
  try {
    const profile = await ProfileModel.findOne({ userId });
    return profile;
  } catch (error) {
    console.error(error, "Error in getProfileByUserId");
    throw error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
};

export const updateProfile = async ({
  profileId,
  updates,
}: UpdateProfileParams) => {
  try {
    const updated = await ProfileModel.findByIdAndUpdate(profileId, updates, {
      new: true,
    });
    return updated;
  } catch (error) {
    console.error(error, "Error in updateProfile");
    throw error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
};

export const deleteProfile = async (profileId: string) => {
  try {
    return await ProfileModel.findByIdAndDelete(profileId);
  } catch (error) {
    console.error(error, "Error in deleteProfile");
    throw error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
};

export const getAllProfiles = async () => {
  try {
    return await ProfileModel.find().populate("userId");
  } catch (error) {
    console.error(error, "Error in getAllProfiles");
    throw error instanceof Error
      ? error
      : new Error("An unknown error occurred");
  }
};
