import UserModel from "../models/userModel";
import {
  CreateUserParams,
  GetUserByEmailParams,
  UpdateUserParams,
} from "../types/userServiceTypes";

export const createUser = async ({
  email,
  userName,
  password,
}: CreateUserParams) => {
  try {
    const user = new UserModel({ email, userName, password });
    return await user.save();
  } catch (error) {
    console.log(error, "erro increateUser ");
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};

export const getUserByEmail = async ({ email }: GetUserByEmailParams) => {
  try {
    const user = await UserModel.findOne({ email });
    return user;
  } catch (error) {
    console.log(error, "erro getUserByEmail ");
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};

export const updateUser = async ({ userId, updates }: UpdateUserParams) => {
  try {
    const updated = await UserModel.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    return updated;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const deleted = await UserModel.findByIdAndDelete(userId);

    return deleted;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};

export const getAllUsers = async () => {
  try {
    return await UserModel.find();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};
