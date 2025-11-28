// components/chat/ChatInput.tsx
import React from "react";
import InputContainer from "../../../shared/Input/Container/InputContainer";
import SendButton from "./SendButton";
import { ChatInputProps } from "../types/chatInputTypes";

const ChatInput: React.FC<ChatInputProps> = ({
  control,
  errors,
  onSend,
  isSending,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-t border-gray-200 sticky bottom-0 z-10">
      <div className="flex-grow mr-2">
        <InputContainer
          name="message"
          label="Message"
          control={control}
          type="text"
          errors={errors}
        />
      </div>
      <SendButton onClick={onSend} isLoading={isSending} />
    </div>
  );
};

export default ChatInput;
