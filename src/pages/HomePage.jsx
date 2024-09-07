// src/pages/HomePage.jsx
import React from "react";
import MainTemplate from "../components/templates/MainTemplate";
import Section from "../components/atoms/Section/Section";
import Spacer from "../components/atoms/Spacer/Spacer";
import Row from "../components/atoms/Row/Row";
import Column from "../components/atoms/Column/Column";
import Header from "../components/organisms/Header/Header"; // Corrected path
import Footer from "../components/organisms/Footer/Footer";

const HomePage = () => {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <div>
      <Header />
      <Section>
        <MainTemplate onSearch={handleSearch}>
          <Row>
            <Column>
              <h2>Welcome</h2>
              <Spacer />
              <p>Check out my work below.</p>
            </Column>
            <Column>
              <h2>Welcome</h2>
              <Spacer />
              <p>Check out my work below.</p>
            </Column>
            <Column>
              <h2>Welcome</h2>
              <Spacer />
              <p>Check out my work below.</p>
            </Column>
            <Column>
              <h2>Welcome</h2>
              <Spacer />
              <p>Check out my work below.</p>
            </Column>
            <Column>
              <h2>Welcome</h2>
              <Spacer />
              <p>Check out my work below.</p>
            </Column>
          </Row>
        </MainTemplate>
      </Section>
      <Footer />
    </div>
  );
};

export default HomePage;
