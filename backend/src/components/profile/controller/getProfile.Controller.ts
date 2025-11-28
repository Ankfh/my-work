import { Request, Response } from "express";
import { GetProfileRequestParams } from "../types/profileControllerTypes";
import { getProfileByUserId } from "../services/profileService";

export const getProfileByUserIdController = async (
  req: Request<GetProfileRequestParams>,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;
    console.log(userId, "user id is here now ");
    if (!userId) {
      res.status(400).json({ success: false, error: "User ID is required" });
      return;
    }

    const profile = await getProfileByUserId({ userId });
console.log(profile  , 'profile==')
    if (!profile) {
      res.status(404).json({ success: false, error: "Profile not found" });
      return;
    }

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error("Error in getProfileByUserIdController:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
