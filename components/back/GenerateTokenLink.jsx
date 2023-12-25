import { FingerPrintIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const GenerateTokenLink = ({ account }) => {
  let url = "/";
  switch (account.broker) {
    case "flattrade":
      url = `https://auth.flattrade.in/?app_key=${account.key}`;
      break;
    case "finvaisa":
      url = "/dashboard";
      break;

    default:
      break;
  }
  return (
    <Link href={url} className="p-2 border rounded-md hover:bg-green-300">
      <FingerPrintIcon className="w-5 text-blue-700" />
    </Link>
  );
};

export default GenerateTokenLink;
