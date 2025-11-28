// components/RoutesContainer.tsx
import React from "react";
import { AppRouteProps } from "../types/routesType";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/context/AuthProvider";
import CenteredLoader from "../../../shared/Loaders/view/CenteredLoader";

const RoutesContainer: React.FC<AppRouteProps> = ({
  element: Page,
  isProtected,
  requiredRole,
}) => {
  const { isLogin, userData, authLoading } = useAuth();
  console.log(isLogin, "isLogin");
  console.log(isProtected, "isProtected");
  console.log(authLoading, "authLoading");
  if (authLoading) {
    return <CenteredLoader />;
  }
  if (isProtected && !isLogin) {
    return <Navigate to="/signup" replace />;
  }
  if (!isProtected && isLogin) {
    return <Navigate to="/" replace />;
  }
  // if (requiredRole && userData?.role !== requiredRole) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return <Page />;
};

export default RoutesContainer;
