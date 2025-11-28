import { Request, Response } from "express";

import { Types } from "mongoose";
import { AddProfileRequestBody } from "../types/profileControllerTypes";
import {
  createProfile,
  getProfileByUserId,
  updateProfile,
} from "../services/profileService";

export const addProfileDataController = async (
  req: Request<{}, {}, AddProfileRequestBody>,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      profession,
      userId,
      github,
      linkedin,
      upwork,
      fiver,
      email,
      phone,
    } = req.body;

    const file = req.file;

    if (!file) {
      res.status(400).json({ error: "Image file is required" });
      return;
    }

    const existingProfile = await getProfileByUserId({ userId });

    const profilePayload = {
      name,
      profession,
      image: file.filename, // store only the file name
      userId: new Types.ObjectId(userId),
      socialLinks: {
        github: github || null,
        linkedin: linkedin || null,
        upwork: upwork || null,
        fiver: fiver || null,
      },
      contacts: {
        email: email || null,
        phone: phone || null,
      },
    };

    let profile;

    if (existingProfile) {
      const profileId = (existingProfile._id as Types.ObjectId).toString();

      profile = await updateProfile({
        profileId,
        updates: profilePayload,
      });
    } else {
      profile = await createProfile(profilePayload);
    }

    res.status(200).json({
      message: existingProfile ? "Profile updated" : "Profile created",
      data: profile,
      success: true,
    });
  } catch (error) {
    console.error("Error in addProfileDataController:", error);
    res.status(500).json({ error: "Internal server error", success: false });
  }
};
