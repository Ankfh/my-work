import { Router } from "express";
import { createProjectController } from "../controller/createProjectController";
import { singleUpload } from "../../../shared/multerUpload/middleware/multerUpload";
import { getAllProjectsController } from "../controller/getAllProjectsController";
// import { getProjectsController } from "../controller/getProjectsController";
// import { updateProjectController } from "../controller/updateProjectController";
// import { deleteProjectController } from "../controller/deleteProjectController";

const projectRoute = Router();

projectRoute.post(
  "/",
  singleUpload("image", "project"),
  createProjectController
);
projectRoute.get("/", getAllProjectsController);
// projectRoute.put("/:id", updateProjectController);
// projectRoute.delete("/:id", deleteProjectController);

export default projectRoute;
