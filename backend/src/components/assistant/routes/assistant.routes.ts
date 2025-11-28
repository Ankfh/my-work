// src/routes/user.routes.ts

import { Router } from "express";
import handleAssistantController from "../Controller/handleAssistantController";
import directDockerapi from "../Controller/directDockerapi";

const assistantRoutes = Router();

assistantRoutes.post("/message", directDockerapi);

export default assistantRoutes;
