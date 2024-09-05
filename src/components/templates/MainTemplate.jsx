// src/components/templates/MainTemplate.jsx
import React from "react";
import Header from "../organisms/Header/Header"; // Corrected path
import Footer from "../organisms/Footer/Footer"; // Corrected path

const MainTemplate = ({ children }) => {
  return (
    <div className="main-template">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
