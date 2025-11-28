// src/context/AlertContext.tsx
import React, { createContext, useContext } from "react";
import { useAlert } from "../hook/useAlert";

const AlertContext = createContext<ReturnType<typeof useAlert> | null>(null);

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const alert = useAlert();

  return (
    <AlertContext.Provider value={alert}>
      {children}
      {alert.AlertComponent()}
    </AlertContext.Provider>
  );
};

export const useGlobalAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useGlobalAlert must be used within an AlertProvider");
  }
  return context;
};
