import { UserDocument } from "./userModelType";

export interface ComparePasswordsParams {
  plainPassword: string;
  hashedPassword: string;
}

export interface GenerateTokenParams {
  user: UserDocument;
}
