// src/components/templates/MainTemplate.jsx
import React from "react";
import Section from "../atoms/Section/Section";

import Header from "../organisms/Header/Header"; // Corrected path
import Footer from "../organisms/Footer/Footer"; // Corrected path

const MainTemplate = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default MainTemplate;
