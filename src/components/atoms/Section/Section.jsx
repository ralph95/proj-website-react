import React from "react";

const Section = ({ children, heroImage, heroContent, className = "" }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className={`
          w-full 
          bg-cover 
          bg-center 
          ${className}
        `}
        style={
          heroImage
            ? {
                backgroundImage: `url(${heroImage})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }
            : {}
        }
      >
        {/* Overlay content in hero section */}
        <div className="max-w-7xl mx-auto p-5 h-full flex flex-col items-start justify-center">
          {heroContent}
        </div>
      </div>

      {/* Directly rendering children without extra wrapper */}
      <div className="max-w-7xl mx-auto px-5">{children}</div>
    </div>
  );
};

export default Section;
