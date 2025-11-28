// components/shared/Mui/MuiIconButton.ts
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

export const MuiIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: deepPurple[600],
  color: "#fff",
  padding: "10px",
  borderRadius: theme.shape.borderRadius,
  transition: "background-color 0.3s ease, transform 0.2s ease",

  "&:hover": {
    backgroundColor: deepPurple[700],
    transform: "scale(1.05)",
  },

  "&:disabled": {
    backgroundColor: deepPurple[200],
    color: "#eee",
  },
}));
