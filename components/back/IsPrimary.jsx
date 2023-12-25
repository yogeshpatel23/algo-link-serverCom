import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const IsPrimary = ({ isPrimary }) => {
  return isPrimary ? (
    <span className="inline-flex items-center bg-green-500 text-white px-2 py-1 rounded-full text-xs">
      Primary <CheckIcon className="w-4" />
    </span>
  ) : null;
};

export default IsPrimary;
