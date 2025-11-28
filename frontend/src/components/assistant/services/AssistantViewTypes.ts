import { Control, FieldErrors } from "react-hook-form";
import { AssistantFormInputs } from "../types/assistantTypes";

// types/AssistantViewTypes.ts
export interface ChatMessage {
    id: string;
    message: string;
    self: boolean;
    loading?: boolean; // for assistant messages
    replyId?: string;  // link to original message
  }
  
  export interface AssistantViewProps {
    control: Control<AssistantFormInputs>;
    errors: FieldErrors<AssistantFormInputs>;
    onSubmit: () => void;
    messages: ChatMessage[]; // ✅ Accept array of messages
  }
  