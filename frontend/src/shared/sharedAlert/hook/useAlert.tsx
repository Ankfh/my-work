import { useState, useCallback } from "react";
import { Alert, Snackbar } from "@mui/material";
import { AlertOptions, AlertSeverity } from "../types/alertTypes";

interface AlertState {
  open: boolean;
  message: string;
  severity: AlertSeverity;
  duration: number;
}

export const useAlert = () => {
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: "info",
    duration: 3000,
  });

  const openAlert = useCallback(
    ({ message, severity = "info", duration = 3000 }: AlertOptions) => {
      setAlertState({
        open: true,
        message,
        severity,
        duration,
      });
    },
    []
  );

  const closeAlert = () => {
    setAlertState({
      open: false,
      message: "",
      severity: "info",
      duration: 3000,
    });
  };

  const AlertComponent = () => (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }} // top center position
      open={alertState.open}
      autoHideDuration={alertState.duration}
      onClose={closeAlert}
    >
      <Alert
        onClose={closeAlert}
        severity={alertState.severity}
        variant="filled"
        sx={{
          width: "100%",
          bgcolor: "#9c27b0", // normal purple
          color: "white",
        }}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );

  return {
    openAlert,
    AlertComponent,
  };
};
