import React, { Children } from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className="bg-rose-900 font-poppins text-white font-semibold py-1 px-8 mr-2 mb-2 rounded-lg"
    >
      {props.children}
    </button>
  );
};

export default Button;
