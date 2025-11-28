import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    // Debug: Check if env is loading
    console.log("Connecting to MongoDB with URI:", process.env.LOCAL_URI);

    if (!process.env.LOCAL_URI) {
      throw new Error("LOCAL_URI environment variable is not defined");
    }

    const conn = await mongoose.connect(process.env.LOCAL_URI);

    // console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    // console.log(`📊 Database name: ${conn.connection.name}`);
    // console.log(`🛠️ Connection ready state: ${conn.connection.readyState}`); // 1 = connected
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

// Optional: Add event listeners for better debugging
mongoose.connection.on("connected", () => {
  console.log("🟢 Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.error("🔴 Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("🟡 Mongoose disconnected from DB");
});

export default connectDB;
