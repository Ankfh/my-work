// components/chat/SendButton.tsx
import React from "react";
import { CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MuiIconButton } from "../style/MuiIconButton";

interface SendButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

const SendButton: React.FC<SendButtonProps> = ({ onClick, isLoading }) => {
  return (
    <MuiIconButton onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        <CircularProgress size={24} sx={{ color: "#fff" }} />
      ) : (
        <SendIcon />
      )}
    </MuiIconButton>
  );
};

export default SendButton;
