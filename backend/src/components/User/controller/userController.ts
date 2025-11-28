import { Request, Response } from "express";

interface UserRequestBody {
  name: string;
  email: string;
  password: string;
}

const userController = (
  req: Request<{}, {}, UserRequestBody>,
  res: Response
): void => {
  try {
    const { name, email, password } = req.body;
    console.log(`Name: ${name}, Email: ${email}, password: ${password}`);
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in userController:", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

export default userController;
