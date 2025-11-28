import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { authReducer, initialState } from "../services/reducerAuthSerives";
import { AuthContextType, AuthState } from "../types/auth.types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const checkForLogin = () => {
      try {
        const storedUser = JSON.parse(
          localStorage.getItem("user_data") || "null"
        );
        if (storedUser?.isLogin) {
          authDispatch({
            type: "LOGIN",
            payload: { ...storedUser },
          });
        }
      } catch (error) {
        console.error("Error in checkForLogin:", error);
      } finally {
        authDispatch({ type: "SET_LOADING", payload: false });
      }
    };

    checkForLogin();
  }, []);

  const dispatchAuthLogin = ({
    loginData,
  }: {
    loginData: Partial<AuthState>;
  }) => {
    authDispatch({
      type: "LOGIN",
      payload: { ...loginData },
    });
  };

  const dispatchAuthLogout = () => {
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, dispatchAuthLogin, dispatchAuthLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
