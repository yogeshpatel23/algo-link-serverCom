import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

const AccountStatus = ({ status }) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        status ? "bg-green-500 text-white" : "bg-red-100 text-gray-700"
      )}
    >
      {status ? (
        <>
          Active <CheckIcon className="w-4 ml-1 text-white" />{" "}
        </>
      ) : (
        <>
          InActive <XMarkIcon className="w-4 ml-1 text-gray-500" />{" "}
        </>
      )}
    </span>
  );
};

export default AccountStatus;
