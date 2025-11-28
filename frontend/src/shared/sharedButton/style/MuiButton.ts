// src/components/style/muiButton.ts
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { muiButtonPropsType } from "../types/muiButtonType";

export const ButtonMui = styled(Button)<muiButtonPropsType>(({ theme, bgColor }) => {
  const baseColor = bgColor || "#9c27b0";  // Normal purple (MUI's standard purple[500])
  const hoverColor = "#ba68c8";   // Light Purple

  return {
    textTransform: "none",
    backgroundColor: baseColor,
    color: "white",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: bgColor || hoverColor,
      color: "white",
    },
  };
});
