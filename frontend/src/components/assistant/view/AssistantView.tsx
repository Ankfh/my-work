import React, { useEffect, useRef } from "react";
import { AssistantViewProps } from "../services/AssistantViewTypes";
import ChatInput from "./ChatInput";

const AssistantView: React.FC<AssistantViewProps> = ({
  control,
  errors,
  onSubmit,
  messages,
}) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Scrollable Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.self ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.self
                  ? "bg-purple-100 text-right"
                  : msg.loading
                  ? "bg-gray-100 italic text-gray-500"
                  : "bg-gray-200 text-left"
              }`}
            >
              {msg.loading ? "Typing..." : msg.message}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Fixed Input */}
      <form onSubmit={onSubmit} className="border-t bg-white px-4 py-3">
        <ChatInput
          control={control}
          errors={errors}
          onSend={onSubmit}
          isSending={false}
        />
      </form>
    </div>
  );
};

export default AssistantView;
