// src/pages/HomePage.jsx
import React from "react";
import MainTemplate from "../components/templates/MainTemplate";
import Section from "../components/atoms/Section/Section";
import Spacer from "../components/atoms/Spacer/Spacer";
import Row from "../components/atoms/Row/Row";
import Column from "../components/atoms/Column/Column";
import heroImage from "../assets/images/hero-banner.jpg";
import reactLogo from "../assets/images/react-logo.png";
import typeScript from "../assets/images/typescript.png";
import htmlLogo from "../assets/images/html.png";
import javaScript from "../assets/images/javascript.png";
import styled from "styled-components";
import inversedPolygon from "../assets/svg/inversed-polygon.svg";
import heroRaf from "../assets/images/hero_raf.png";

const StyledPolygon = styled.div`
  height: 0rem;
  background-color: #0d0d0d;
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
    background: #0d0d0d;
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
      height: 1.75rem; /* Further adjust height */
      bottom: calc(-1 * 0.56rem); /* Adjust bottom dynamically */
    }
  }

  @media (max-width: 480px) {
    &::after {
      width: 75%;
      height: 6.25rem; /* Adjust height for mobile screens */
      bottom: calc(-2 * 1.5rem); /* Adjust bottom dynamically */
    }
  }
`;

const HomePage = () => {
  return (
    <MainTemplate>
      <Section
        heroImage={heroImage}
        heroContent={
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
            {/* Left Side Text */}
            <div className="text-left pt-[5px]">
              <Spacer />
              <h1 className="text-6xl font-bold">Hi, I'm Ralph</h1>
              <p className="text-4xl mt-8 font-bold">
                I build and maintain websites.
              </p>
            </div>

            {/* Right Side Chibi Image + Floating Logos */}
            <div className="relative max-w-[300px] w-full pb-[5px]">
              {/* Hero Character */}
              <img
                src={heroRaf}
                alt="Hero Raf"
                className="w-full h-auto z-10 relative"
              />

              {/* Floating Logos */}
              <img
                src={htmlLogo}
                alt="HTML5"
                className="absolute top-[30%] left-[-5%] w-[50px] animate-floatHTML"
              />
              <img
                src={javaScript}
                alt="JavaScript"
                className="absolute top-[50%] left-[90%] w-[50px] animate-floatJS"
              />
              <img
                src={reactLogo}
                alt="React"
                className="absolute top-[50%] left-[5%] w-[40px] animate-float"
              />
              <img
                src={typeScript}
                alt="TypeScript"
                className="absolute top-[30%] left-[95%] w-[45px] animate-floatTS"
              />
            </div>
          </div>
        }
      >
        <StyledPolygon />
      </Section>
      <Spacer height="4rem" style={{ backgroundColor: "#0d0d0d" }} />
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
