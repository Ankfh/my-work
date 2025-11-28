import { ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  size?: MuiButtonProps["size"];
  bgColor?: string; // optional custom prop passed to styled button
  onClick?: () => void;
  loading?: boolean;
}
