import { Request, Response } from "express";
import {
  getProfileByUserId,
  updateProfileByUserId,
} from "../services/profileService";

export const addContactAndSocail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, name, profession, socialLinks, contacts } = req.body;

    if (!userId) {
      res.status(400).json({ success: false, message: "User ID is required" });
      return;
    }

    // Check if profile exists
    const existingProfile = await getProfileByUserId({ userId });

    if (!existingProfile) {
      res.status(404).json({ success: false, message: "Profile not found" });
      return;
    }

    const updatedProfile = await updateProfileByUserId({
      userId,
      updates: {
        name,
        profession,
        socialLinks,
        contacts,
      },
    });

    res.status(200).json({ success: true, data: updatedProfile });
  } catch (error: any) {
    console.error("Error in addContactAndSocail", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
