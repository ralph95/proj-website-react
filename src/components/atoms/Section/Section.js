import React from "react";

const Section = ({ children, heroImage, heroContent }) => {
  return (
    <>
      {/* Hero Section */}
      {heroImage && (
        <div
          className="w-full h-[70vh] md:h-[60vh] lg:h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center 80%", // Offsets the background image 20% from the top
          }}
        >
          {/* Overlay content in hero section */}
          <div className="max-w-7xl mx-auto p-5 h-full flex flex-col items-start justify-center">
            {heroContent}
          </div>
        </div>
      )}

      {/* Regular Section */}
      <div className="bg-[#E5EAF5] w-full">
        <div className="max-w-7xl mx-auto p-5 grid gap-4">{children}</div>
      </div>
    </>
  );
};

export default Section;
