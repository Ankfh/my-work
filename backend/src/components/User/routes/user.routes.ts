// src/routes/user.routes.ts

import { Router } from "express";
import { signupUser } from "../controller/signup.controller";
import { loginUser } from "../controller/login.controller";

const userRoute = Router();

userRoute.post("/register", signupUser);
userRoute.post("/login", loginUser);

export default userRoute;
