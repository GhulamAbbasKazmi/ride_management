// components/Input.js
import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded border px-4 py-2 w-full focus:outline-none focus:ring-2 transition-all duration-200";

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseStyles} border-gray-300 focus:ring-blue-400`}
        {...props}
      />
    </div>
  );
};

export default Input;
