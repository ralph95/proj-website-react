// src/components/templates/MainTemplate.jsx
import React from "react";
import Section from "../atoms/Section/Section";
import heroImage from "../../assets/images/hero-banner.jpg";

import Header from "../organisms/Header/Header"; // Corrected path
import Footer from "../organisms/Footer/Footer"; // Corrected path

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
