// container/AssistantContainer.tsx
import React from "react";
import AssistantView from "../view/AssistantView";
import useAssistantController from "../Controller/useAssistantController";

const AssistantContainer = () => {
  const { handleSubmit, control, errors, onSubmit, messages } =
    useAssistantController();

  return (
    <AssistantView
      control={control}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      messages={Array.from(messages.values())} // ✅ Convert Map to Array here
    />
  );
};

export default AssistantContainer;
