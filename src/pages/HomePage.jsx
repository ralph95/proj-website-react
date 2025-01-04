// src/pages/HomePage.jsx
import React from "react";
import MainTemplate from "../components/templates/MainTemplate";
import Section from "../components/atoms/Section/Section";
import Spacer from "../components/atoms/Spacer/Spacer";
import Row from "../components/atoms/Row/Row";
import Column from "../components/atoms/Column/Column";
import heroImage from "../assets/images/hero-banner.jpg";

const HomePage = () => {
  return (
    <MainTemplate>
      <Section
        heroImage={heroImage}
        heroContent={
          <>
            <Spacer />
            <h1>Welcome to Our Website</h1>
            <p>Discover amazing products and services.</p>
          </>
        }
      >
        <Row>
          <Column>
            <h2>About Us</h2>
            <p>We are a company .</p>
          </Column>
          <Column>
            <h2>About Us</h2>
            <p>We are a company </p>
          </Column>
          <Column>
            <h2>About Us</h2>
            <p>We are a company .</p>
          </Column>
          <Column>
            <h2>About Us</h2>
            <p>We are a company .</p>
          </Column>
        </Row>
      </Section>
    </MainTemplate>
  );
};

export default HomePage;
