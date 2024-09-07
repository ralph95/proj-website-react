import React from "react";

const Section = ({ children }) => {
  return (
    <div className="bg-[#E5EAF5] w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-5 grid gap-4 bg-white">
        {children}
      </div>
    </div>
  );
};

export default Section;
