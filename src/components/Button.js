import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-2 py-1 m-2 mt-2 rounded-md bg-gray-200 font-semibold">
        {name}
      </button>
    </div>
  );
};

export default Button;
