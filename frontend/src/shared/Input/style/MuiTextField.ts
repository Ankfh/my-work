// theme/MuiTextField.ts
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";

export const MuiTextField = styled(TextField)(({ theme }) => ({
  // General field spacing
  margin: theme.spacing(1, 0),
  width: "100%",

  // Input root styles
  ".MuiInputBase-root": {
    color: grey[900],
    fontSize: "0.9rem",
    fontWeight: 400,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },

  // Label styles
  "& label": {
    color: grey[600],
    fontSize: "0.85rem",
    transform: "translate(14px, 12px) scale(1)",
  },
  "& label.Mui-focused": {
    color: deepPurple[700],
    transform: "translate(14px, -9px) scale(0.75)",
  },
  "& label.MuiFormLabel-filled": {
    transform: "translate(14px, -9px) scale(0.75)",
  },

  // Outline styles
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: grey[300],
      borderWidth: 1,
    },
    "&:hover fieldset": {
      borderColor: deepPurple[400],
    },
    "&.Mui-focused fieldset": {
      borderColor: deepPurple[700],
      borderWidth: 1,
      // boxShadow: `0 0 0 2px ${deepPurple[100]}`,
    },
  },

  // Helper text styles
  "& .MuiFormHelperText-root": {
    margin: theme.spacing(0.5, 0, 0),
    fontSize: "0.75rem",
    color: grey[500],
    "&.Mui-error": {
      color: theme.palette.error.main,
    },
  },
}));
