import express, { Request, Response } from "express";
import mainRouter from "./shared/routes/mainRoutes";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./components/database/services/ConnectionDB";
dotenv.config();
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS
app.use(cors());

app.use("/media", express.static(path.join(process.cwd(), "media")));
// Basic route
app.use("/", mainRouter);

// Start the server and connect to MongoDB
const startServer = async () => {
  try {
    // Connect to MongoDB before starting the server
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
