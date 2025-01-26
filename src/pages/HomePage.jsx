// src/pages/HomePage.jsx
import React from "react";
import MainTemplate from "../components/templates/MainTemplate";
import Section from "../components/atoms/Section/Section";
import Spacer from "../components/atoms/Spacer/Spacer";
import Row from "../components/atoms/Row/Row";
import Column from "../components/atoms/Column/Column";
import heroImage from "../assets/images/hero-banner.jpg";
import styled from "styled-components";
import inversedPolygon from "../assets/svg/inversed-polygon.svg";

const StyledPolygon = styled.div`
  height: 0rem;
  background-color: #494d5f;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0; /* Ensure it's anchored to the bottom */
    left: 50%;
    transform: translateX(-50%);
    width: 100%; /* Maintain responsive width */
    height: 2.0625rem; /* Default height */
    background: #494d5f;
    -webkit-mask-image: url(${inversedPolygon});
    mask-image: url(${inversedPolygon});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    background-size: contain;
  }

  @media (max-width: 1200px) {
    &::after {
      width: 50%; /* Adjust width for smaller screens */
      height: 1.75rem; /* Adjust height for proportional scaling */
      bottom: 0; /* Keep it anchored to the bottom */
    }
  }

  @media (max-width: 768px) {
    &::after {
      width: 25%; /* Further adjust width */
      height: 1.5rem; /* Further adjust height */
      bottom: 0; /* Still anchored */
    }
  }
`;

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
      ></Section>
      <Section>
        <StyledPolygon />
      </Section>
      <Section>
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
