// types/assistantTypes.ts
export interface AssistantFormInputs {
  message: string;
}

export interface SendMessageArgs {
  id: string;
  message: string;
  self: boolean;
  replyId?: string; 
}

export interface SendMessageResponse {
  reply: string;
  id: string;
  success: boolean;
}
