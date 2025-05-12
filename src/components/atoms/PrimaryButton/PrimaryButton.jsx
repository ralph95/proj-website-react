// PrimaryButton.js
import React from "react";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#F26522] text-[#0D0D0D] text-xl sm:text-2xl font-extrabold px-1 sm:px-8 py-2 rounded hover:bg-[#e65c1f] focus:outline-none focus:ring-2 focus:ring-[#F26522]"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
