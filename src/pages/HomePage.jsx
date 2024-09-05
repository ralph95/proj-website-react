// src/pages/HomePage.jsx
import React from "react";
import MainTemplate from "../components/templates/MainTemplate"; // Keep the existing import for ProjectSection

const HomePage = () => {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <MainTemplate onSearch={handleSearch}>
      <section>
        <h2>Welcome to My Portfolio</h2>
        <p>Check out my work below.</p>
      </section>
    </MainTemplate>
  );
};

export default HomePage;
