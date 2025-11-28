import { Request, Response } from "express";
import { AssistantMessageParams } from "../types/assistantTypes";
import axios from "axios";

const handleAssistantController = async (
  req: Request<{}, {}, AssistantMessageParams>,
  res: Response
): Promise<void> => {
  try {
    const { id, message, self, replyId } = req.body;
 const newMeessage = `${message} the answer must be in one line only and answer fast`
    console.log("📩 Assistant Message Received:", {
      id,
      message,
      self,
      replyId,
    });

    // log start time
    const startTime = new Date();
    console.log("⏱️ Start Time:", startTime.toISOString());

    // ▶️ Call your Flask assistant endpoint
    const flaskRes = await axios.post("http://localhost:5001/ask", {
      prompt: newMeessage,
    });

    // log end time
    const endTime = new Date();
    console.log("✅ End Time:", endTime.toISOString());
console.log(flaskRes.data , "flaskRes.data")
    // calculate time taken
    const timeTaken = endTime.getTime() - startTime.getTime();
    console.log(
      
    )
    // extract reply
    const assistantReply = flaskRes.data?.response || "No response.";

    // return to client
    res.status(200).json({
      success: true,
      reply: assistantReply,
      id: replyId,
    });
  } catch (error: any) {
    console.error("❌ Flask API error:", error.message || error);
    res.status(500).json({ success: false, message: "Assistant API Error" });
  }
};

export default handleAssistantController;
