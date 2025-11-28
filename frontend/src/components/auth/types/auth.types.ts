export interface UserData {
    name: string;
    email: string;
    // add more fields as needed
  }
  
  export interface AuthState {
    userData: {
      id: string;
      email: string;
      userName: string;
    } | null;
    token: string | null;
    authLoading: boolean;
    isLogin: boolean;
  }
  
  export type AuthAction =
    | { type: "LOGIN"; payload: Partial<AuthState> }
    | { type: "LOGOUT" }
    | { type: "SET_LOADING"; payload: boolean };
  
  export interface AuthContextType extends AuthState {
    dispatchAuthLogin: (data: { loginData: Partial<AuthState> }) => void;
    dispatchAuthLogout: () => void;
  }
  