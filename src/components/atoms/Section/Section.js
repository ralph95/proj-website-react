import React from "react";

const Section = ({ children, heroImage, heroContent }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      {heroImage && (
        <div
          className="w-full h-[80vh] md:h-[60vh] lg:h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center center", // Center the image within the div
            backgroundSize: "cover", // Make sure the background image covers the entire section
          }}
        >
          {/* Overlay content in hero section */}
          <div className="max-w-7xl mx-auto p-5 h-full flex flex-col items-start justify-center">
            {heroContent}
          </div>
        </div>
      )}

      {/* Directly rendering children without extra wrapper */}
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default Section;
