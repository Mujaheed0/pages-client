import React from "react";

const Button = ({ children, variant = "primary", className, ...rest }) => {
  const baseClasses = "font-medium py-2 px-4 rounded-lg focus:outline-none";
  let classes = "";

  switch (variant) {
    case "primary":
      classes = `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 ${className}`;
      break;
    case "secondary":
      classes = `${baseClasses} bg-gray-300 text-gray-800 hover:bg-gray-400 active:bg-gray-500 ${className}`;
      break;
    case "danger":
      classes = `${baseClasses} bg-red-600 text-white hover:bg-red-700 active:bg-red-800 ${className}`;
      break;
    default:
      classes = `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 ${className}`;
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
