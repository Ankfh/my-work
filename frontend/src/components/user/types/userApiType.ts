// Define request and response types for user endpoints
export interface RegisterUserArgs {
    name: string;
    email: string;
    password: string;
  }
  
  export interface RegisterUserResponse {
    id: string;
    name: string;
    email: string;
    token: string;
    success?: boolean;
  }
  
  export interface LoginUserArgs {
    email: string;
    password: string;
  }
  
  export interface LoginUserResponse {
    user: {
      id: string;
      email: string;
      userName: string;
    } | null;
    token: string;
    success?: boolean;
  }
  
  export interface GetUserResponse {
    id: string;
    name: string;
    email: string;
  }