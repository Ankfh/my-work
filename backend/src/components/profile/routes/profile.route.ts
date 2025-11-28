import { Router } from "express";
import { addProfileDataController } from "../controller/addProfileData.controller";
import { singleUpload } from "../../../shared/multerUpload/middleware/multerUpload";
import { getProfileByUserIdController } from "../controller/getProfile.Controller";
import { addContactAndSocail } from "../controller/addLinkAndContact_controller";
const profileRoute = Router();

profileRoute.post(
  "/add",
  singleUpload("image", "profile"),
  addProfileDataController
);
profileRoute.post("/update", addContactAndSocail);
profileRoute.get("/get-by-user/:userId", getProfileByUserIdController);

export default profileRoute;
