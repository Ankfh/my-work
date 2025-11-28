// view/AssistantView.tsx
import React from "react";
import ChatInput from "../../assistant/view/ChatInput";
import { AssistantViewProps } from "../../assistant/services/AssistantViewTypes";

const AssistantView: React.FC<AssistantViewProps> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col h-screen justify-end bg-gray-50">
      {/* Optional space for chat messages */}
      <div className="flex-grow overflow-y-auto p-4">{/* Messages here */}</div>

      {/* Form at the bottom */}
      <form onSubmit={onSubmit} className="w-full">
        <ChatInput
          control={control}
          errors={errors}
          onSend={onSubmit} // submit on button click
          isSending={false} // connect later to loading state if needed
        />
      </form>
    </div>
  );
};

export default AssistantView;
