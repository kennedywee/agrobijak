import React from "react";

const UAWrapper = ({ title, description, children, borderColor }) => {
  const borderClass =
    borderColor === "red"
      ? "border-rose-900"
      : borderColor === "yellow"
      ? "border-amber-300"
      : "";

  return (
    <div className={`${borderClass} border rounded-md shadow-md p-8`}>
      <h3 className="font-medium text-xl mb-4">{title}</h3>
      <hr />
      <p className="text-gray-700 mt-4">{description}</p>

      <div className="flex space-x-10 mt-4">{children}</div>
    </div>
  );
};

export default UAWrapper;
