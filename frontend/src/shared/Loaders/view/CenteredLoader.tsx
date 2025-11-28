// src/components/common/CenteredLoader.tsx
import React from "react";
import { CircularProgress, Box } from "@mui/material";

const CenteredLoader: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default CenteredLoader;
