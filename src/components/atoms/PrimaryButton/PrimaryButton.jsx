// PrimaryButton.js
import React from "react";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#F26522] text-[#0D0D0D] text-base sm:text-lg font-extrabold px-4 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-[#e65c1f] focus:outline-none focus:ring-2 focus:ring-[#F26522]"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
