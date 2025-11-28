import { Schema, model, Document } from "mongoose";
import { IUser } from "../types/userModelType";

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true, // Add this line to create an index
    },
    userName: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Alternative way to add index (works the same as above)
// UserSchema.index({ email: 1 }); // 1 for ascending index

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
