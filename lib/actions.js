"use server";

import User from "@/models/user.model";
import dbConnect from "./dbConnect";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { AuthError } from "next-auth";
import TradingAccount from "@/models/tradingAccount.model";
import { revalidatePath } from "next/cache";

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

export const addAccount = async (_, formData) => {
  const { name, broker, userid, key, secret, lot, risk, isActive } =
    Object.fromEntries(formData.entries());
  const validationError = {};
  if (!name) validationError["name"] = { message: "Name is required" };
  if (!broker) validationError["broker"] = { message: "Broker is required" };
  if (!userid) validationError["userid"] = { message: "UserId is required" };
  if (!key) validationError["key"] = { message: "key is required" };
  if (!secret) validationError["secret"] = { message: "Secret is required" };
  if (Object.keys(validationError).length) return validationError;

  try {
    const session = await auth();
    const user = session.user?.id;
    const account = await TradingAccount.findOne({ user, userid });
    if (account) return { userid: { message: "This Account already added." } };
    const newAccount = await TradingAccount.create({
      user,
      name,
      broker,
      userid,
      key,
      secret,
      lot,
      risk,
      isActive,
    });
  } catch (error) {
    console.log(`add Account error : ${error}`);
    return { error: { message: "Someting went wrong" } };
  }
  revalidatePath("/accounts");
  redirect("/accounts");
};
