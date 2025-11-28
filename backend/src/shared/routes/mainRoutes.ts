import { Router, Request, Response } from "express";
import userRoute from "../../components/User/routes/user.routes";
import assistantRoutes from "../../components/assistant/routes/assistant.routes";
import profileRoute from "../../components/profile/routes/profile.route";
import skillsRoutes from "../../components/skills/routes/skillsRoutes";
import projectRoute from "../../components/Project/route/projectRoutes";

const mainRouter = Router();

mainRouter.use("/user", userRoute);
mainRouter.use("/assistant", assistantRoutes);
mainRouter.use("/profile", profileRoute);
mainRouter.use("/user-skills", skillsRoutes);
mainRouter.use("/project", projectRoute);
export default mainRouter;
