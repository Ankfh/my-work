import React from "react";
import { ButtonProps } from "../types/MuiButtonProsTypes";
import { ButtonMui } from "../style/MuiButton";
import CircularProgress from "@mui/material/CircularProgress";

const MuiButton: React.FC<ButtonProps> = ({
  type = "button",
  title,
  size = "medium",
  bgColor,
  onClick = () => {},
  loading = false,
}) => {
  return (
    <ButtonMui
      onClick={onClick}
      type={type}
      size={size}
      bgColor={bgColor}
      fullWidth
      disabled={loading}
      endIcon={loading ? <CircularProgress size={18} color="inherit" /> : null}
    >
      {title}
    </ButtonMui>
  );
};

export default MuiButton;
