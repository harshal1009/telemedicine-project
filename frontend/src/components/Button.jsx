import React from "react";

const Button = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-100",
  };

  return (
    <button
      className={`px-4 py-2 rounded-md transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
