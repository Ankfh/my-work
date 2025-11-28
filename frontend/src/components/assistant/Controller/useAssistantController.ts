// hooks/useAssistantController.ts
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AssistantFormInputs } from "../types/assistantTypes";
import { assistantSchema } from "../services/assistantValidation";
import { ChatMessage } from "../services/AssistantViewTypes";
import { useSendMessageMutation } from "../api/assistanApi";

const useAssistantController = () => {
  const [messages, setMessages] = useState<Map<string, ChatMessage>>(new Map());
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors },
  } = useForm<AssistantFormInputs>({
    resolver: yupResolver(assistantSchema),
  });

  const onSubmit: SubmitHandler<AssistantFormInputs> = async (data) => {
    const userId = uuidv4();
    const replyId = uuidv4();

    const userMessage: ChatMessage = {
      id: userId,
      message: data.message,
      self: true,
      replyId,
    };

    const replyPlaceholder: ChatMessage = {
      id: replyId,
      message: "Typing...",
      self: false,
      loading: true,
    };

    // 📨 Add user message and typing placeholder
    setMessages((prev) => {
      const newMap = new Map(prev);
      newMap.set(userId, userMessage);
      newMap.set(replyId, replyPlaceholder);
      return newMap;
    });

    reset(); // Clear the input field

    try {
      const response = await sendMessage(userMessage).unwrap();

      if (response?.success) {
        // ✅ Only update if response was successful
        setMessages((prev) => {
          const newMap = new Map(prev);
          const existing = newMap.get(replyId);

          if (existing) {
            newMap.set(replyId, {
              ...existing,
              message: response.reply,
              loading: false,
            });
          }

          return newMap;
        });
      } else {
        // ❌ If API didn't succeed, show fallback
        setMessages((prev) => {
          const newMap = new Map(prev);
          const existing = newMap.get(replyId);

          if (existing) {
            newMap.set(replyId, {
              ...existing,
              message: "Assistant couldn't respond.",
              loading: false,
            });
          }

          return newMap;
        });
      }
    } catch (err: any) {
      console.error("❌ Assistant error:", err?.message || err);

      // ⛔ Show error message
      setMessages((prev) => {
        const newMap = new Map(prev);
        const existing = newMap.get(replyId);

        if (existing) {
          newMap.set(replyId, {
            ...existing,
            message: "Failed to fetch response. Try again.",
            loading: false,
          });
        }

        return newMap;
      });
    }
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    setError,
    onSubmit,
    messages,
  };
};

export default useAssistantController;
