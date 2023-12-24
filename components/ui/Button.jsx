import clsx from "clsx";
import React from "react";

const Button = ({ children, classname, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        classname
      )}
    >
      {children}
    </button>
  );
};

export default Button;
