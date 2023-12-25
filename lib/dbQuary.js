import TradingAccount from "@/models/tradingAccount.model";
import dbConnect from "./dbConnect";
import { auth } from "@/auth";
import { fvGetToken } from "./flattradeApi";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export async function fetchAccounts() {
  const user = (await auth()).user?.id;
  await dbConnect();
  try {
    const accounts = await TradingAccount.find({ user });
    return accounts;
  } catch (error) {
    console.log(`Fetch Accounts err: ${error}`);
    throw new Error("Faild to fetch user's accounts");
  }
}

export async function saveToken(code, userid) {
  const user = (await auth()).user?.id;
  await dbConnect();
  try {
    const account = await TradingAccount.findOne({ user, userid });
    if (!account) throw new Error("Unable to find accout by ", userid);
    const response = await fvGetToken(account.key, code, account.secret);
    console.log(response);
    if (response.stat === "Not_Ok") throw new Error("Code expired Retry");
    account.token = response.token;
    account.save({ validateBeforeSave: false });
  } catch (error) {
    console.log(`Save token err: ${error}`);
    throw new Error(error.message);
  }
  revalidatePath("/dashbaord");
  // redirect("/dashboard");
}
