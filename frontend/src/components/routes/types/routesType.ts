// types/routesType.ts
import { ComponentType } from "react";

export interface AppRouteProps {
  path: string;
  /** a React component (not an element!) */
  element: ComponentType<any>;
  isProtected: boolean;
  requiredRole?: string;
}
