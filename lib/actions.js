"use server";

import User from "@/models/user.model";
import dbConnect from "./dbConnect";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const register = async (prevState, formData) => {
  const data = Object.fromEntries(formData.entries());
  const validationError = {};
  if (!data.fullName) {
    validationError["fullName"] = { message: "Fullname is required" };
  }
  if (!data.email) {
    validationError["email"] = { message: "email is required" };
  }
  if (!data.password) {
    validationError["password"] = { message: "password is required" };
  } else if (data.password.length < 6) {
    validationError["password"] = { message: "password must be 8 Char" };
  } else if (data.password !== data.cpassword) {
    validationError["cpassword"] = { message: "Confirm password not match" };
  }
  if (Object.keys(validationError).length) return validationError;
  await dbConnect();
  try {
    const user = User.findOne({ email: data.email });
    if (user) {
      return { email: { message: "email already register please login" } };
    }
    const newuser = new User(data);
    await newuser.save();
    redirect("/login");
  } catch (error) {
    console.log(error);
    return { error: { message: "Something went wrong" } };
  }
};

export const login = async (prevState, formData) => {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }

    throw error;
  }
};
