// PrimaryButton.js
import React from "react";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#845BB3] text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
