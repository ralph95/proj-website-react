// src/components/templates/MainTemplate.jsx
import React, { useEffect, useState } from "react";
import Section from "../atoms/Section/Section";

import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";
import ClassicLoader from "../atoms/Loader/Loader"; // ✅ fixed path

const MainTemplate = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate waiting for content to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClassicLoader />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Section>
        <Footer />
      </Section>
    </div>
  );
};

export default MainTemplate;
