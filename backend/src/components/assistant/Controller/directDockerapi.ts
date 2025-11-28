import { Request, Response } from "express";
import { AssistantMessageParams } from "../types/assistantTypes";
import axios from "axios";

const directDockerapi = async (
  req: Request<{}, {}, AssistantMessageParams>,
  res: Response
): Promise<void> => {
  try {
    const { id, message, self, replyId } = req.body;
 const newMeessage = `${message} the answer must be in one line only`
    console.log("📩 Assistant Message:", {
      id,
      message,
      self,
      replyId,
    });

    const startTime = new Date();
    console.log("⏱️ Start Time:", startTime.toISOString());

    const ollamaResponse = await axios.post("http://localhost:11434/api/generate", {
      model: "gemma3:1b",           // or your model name
      prompt: newMeessage,
      stream: false
    });

    const endTime = new Date();
    console.log("✅ End Time:", endTime.toISOString());

    const assistantReply = ollamaResponse.data?.response?.trim() || "No response.";

    res.status(200).json({
      success: true,
      reply: assistantReply,
      id: replyId
    });
  } catch (error: any) {
    console.error("❌ Ollama API error:", error.message || error);
    res.status(500).json({ success: false, message: "Ollama API Error" });
  }
};

export default directDockerapi;
