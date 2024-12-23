// components/Button.js
import React from "react";

const Button = ({ children, onClick, className = "", disabled = false, ...props }) => {
  const baseStyles =
    "rounded px-4 py-2 font-medium focus:outline-none focus:ring-2 transition-all duration-200";

  const activeStyles =
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400";
  const disabledStyles = "bg-gray-300 text-gray-500 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${
        disabled ? disabledStyles : activeStyles
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
