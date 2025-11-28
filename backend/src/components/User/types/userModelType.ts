import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    email: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserDocument extends IUser, Document {}