export interface CreateUserParams {
  email: string;
  userName: string;
  password: string;
}

export interface GetUserByEmailParams {
  email: string;
}

export interface UpdateUserParams {
  userId: string;
  updates: Partial<{
    email: string;
    userName: string;
    password: string;
  }>;
}
