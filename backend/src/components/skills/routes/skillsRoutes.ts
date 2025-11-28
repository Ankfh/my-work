import express from "express";
import { createSkillController } from "../controller/createSkillController";
import { updateSkillController } from "../controller/updateSkillController";
import { deleteSkillController } from "../controller/deleteSkillController";
import { getSkillsByUserController } from "../controller/getSkillsByUserController";
import { getAllSkillsController } from "../controller/getAllSkillsController";
import { singleUpload } from "../../../shared/multerUpload/middleware/multerUpload";
import { getSkillByIdController } from "../controller/getSkillById";
import { deleteImageController } from "../controller/deleteImageController";

const skillsRoutes = express.Router();

skillsRoutes.post(
  "/skill",
  singleUpload("image", "skills"),
  createSkillController
);
skillsRoutes.put("/skill", updateSkillController);
skillsRoutes.delete("/skill/:skillId", deleteSkillController);
skillsRoutes.get("/skills/user/:userId", getSkillsByUserController);
skillsRoutes.get("/skills", getAllSkillsController);
skillsRoutes.get("/skill/:id", getSkillByIdController);
skillsRoutes.post("/delete-image", deleteImageController);

export default skillsRoutes;
