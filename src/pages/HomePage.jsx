// src/pages/HomePage.jsx
import React, { useState } from "react";
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
import Container from "../containers/Container";

import docker from "../assets/images/docker.png";
import jenkins from "../assets/images/jenkins.png";
import amazon from "../assets/images/amazon.png";
import github from "../assets/images/github.png";
import profileImage from "../assets/images/profileImage.png";
import HoneyComb from "../components/atoms/HoneyComb/HoneyComb";

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
  const [isDevOps, setIsDevOps] = useState(false);

  const [showDevOpsLogos, setShowDevOpsLogos] = useState(false);

  const toggleTitle = () => {
    setIsDevOps((prev) => !prev);
    setShowDevOpsLogos((prev) => !prev);
  };

  const containerStyle = {
    textAlign: "left",
    lineHeight: "1.6",
    overflow: "hidden",
  };

  const circleImgStyle = {
    float: "left",
    width: "200px",
    height: "200px",
    shapeOutside: "circle()",
    clipPath: "circle()",
    borderRadius: "50%",
    margin: "0 20px 20px 0",
    objectFit: "cover",
  };

  return (
    <MainTemplate>
      <Section
        heroImage={heroImage}
        heroContent={
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-8 w-full cursor-pointer"
            onClick={toggleTitle}
          >
            {/* Left Side Text */}
            <div className="text-left pt-[5px] sm:text-left text-center max-w-md md:max-w-[45%]">
              <Spacer />
              <div className="block md:hidden">
                <Spacer />
              </div>
              <h1 className="text-4xl font-bold">Hi, I'm Ralph</h1>
              <h1 className="text-5xl mt-4 mb-4 font-bold">
                {isDevOps ? "I'm a DevOps Engineer." : "I'm a Web Developer."}
              </h1>
              <p className="hidden md:block">
                {isDevOps
                  ? "As a DevOps Engineer, I automate processes and optimize workflows to enhance system reliability and scalability. I focus on continuous integration and delivery for efficient software deployment."
                  : "As a web developer, I design and build websites that are fast, responsive, and user-friendly. I work with both front-end and back-end technologies to create seamless and dynamic online experiences."}
              </p>
            </div>

            {/* Right Side Chibi Image + Floating Logos */}
            <div className="relative max-w-[300px] w-full pb-[5px]">
              <img
                src={heroRaf}
                alt="Hero Raf"
                className="w-full h-auto z-10 relative"
              />

              {/* Floating Logos */}
              <div className="absolute top-[35%] left-[-5%] w-[50px] h-[50px] overflow-hidden animate-floatJS perspective-[1000px]">
                {/* HTML5 Logo - Exit with 3D scale/rotate down */}
                <img
                  src={htmlLogo}
                  alt="HTML5"
                  className={`absolute transition-all duration-700 ease-in-out transform-gpu
                      ${
                        showDevOpsLogos
                          ? "translate-y-full translate-x-full opacity-0 scale-75"
                          : "translate-y-0 opacity-100 scale-100"
                      }`}
                  style={{ top: 0, left: 0 }}
                />

                {/* Jenkins Logo - Enter with 3D scale/rotate up */}
                <img
                  src={jenkins}
                  alt="Jenkins"
                  className={`absolute transition-all duration-700 ease-in-out transform-gpu
                      ${
                        showDevOpsLogos
                          ? "translate-y-0 translate-x-0 opacity-100 scale-105"
                          : "translate-y-full translate-x-full opacity-0"
                      }`}
                  style={{ top: 0, left: 0 }}
                />
              </div>
              {/* JavaScript → GitHub */}
              <div className="absolute top-[50%] left-[90%] w-[50px] h-[50px] overflow-hidden animate-floatJS perspective-[1000px]">
                <img
                  src={javaScript}
                  alt="JavaScript"
                  className={`w-[50px] h-[50px]absolute transition-all duration-700 ease-in-out transform-gpu ${
                    showDevOpsLogos
                      ? "translate-y-full -translate-x-full opacity-0 scale-75"
                      : "translate-y-0 opacity-100 scale-100"
                  }`}
                  style={{ top: 0, left: 0 }}
                />
                <img
                  src={github}
                  alt="GitHub"
                  className={`w-[50px] h-[45px] absolute transition-all duration-700 ease-in-out transform-gpu ${
                    showDevOpsLogos
                      ? "translate-y-0 translate-x-0  opacity-100 scale-105"
                      : "translate-y-full -translate-x-full opacity-0 scale-90"
                  }`}
                  style={{ top: 0, left: 0 }}
                />
              </div>

              {/* TypeScript → Amazon */}
              <div className="absolute top-[30%] left-[95%] w-[50px] h-[50px] overflow-hidden animate-floatTS perspective-[1000px]">
                <img
                  src={typeScript}
                  alt="TypeScript"
                  className={`absolute transition-all duration-700 ease-in-out transform-gpu ${
                    showDevOpsLogos
                      ? "translate-y-full -translate-x-full opacity-0 scale-75"
                      : "translate-y-0 opacity-100 scale-100"
                  }`}
                  style={{ top: 0, left: 0 }}
                />
                <img
                  src={amazon}
                  alt="Amazon Web Services"
                  className={`absolute transition-all duration-700 ease-in-out transform-gpu ${
                    showDevOpsLogos
                      ? "translate-y-0 translate-x-0  opacity-100 scale-105"
                      : "translate-y-full -translate-x-full opacity-0 scale-90"
                  }`}
                  style={{ top: 0, left: 0 }}
                />
              </div>

              {/* React → Docker */}
              <div className="absolute top-[50%] left-[5%] w-[50px] h-[50px] overflow-hidden animate-float perspective-[1000px]">
                <img
                  src={reactLogo}
                  alt="React"
                  className={`absolute transition-all duration-700 ease-in-out transform-gpu ${
                    showDevOpsLogos
                      ? "translate-y-full translate-x-full opacity-0 scale-75"
                      : "translate-y-0 opacity-100 scale-100"
                  }`}
                  style={{ top: 0, left: 0 }}
                />
                <img
                  src={docker}
                  alt="Docker"
                  className={`absolute transition-all duration-700 ease-in-out transform-gpu ${
                    showDevOpsLogos
                      ? "translate-y-0 translate-x-0  opacity-100 scale-105 rotate-x-0"
                      : "translate-y-full translate-x-full opacity-0 scale-90"
                  }`}
                  style={{ top: 0, left: 0 }}
                />
              </div>
            </div>
          </div>
        }
      >
        <StyledPolygon />
      </Section>
      <Spacer height="4rem" style={{ backgroundColor: "#0d0d0d" }} />
      <Container>
        <HoneyComb />
      </Container>
      <Container
        centerVertically
        height="auto"
        style={{ marginTop: "2.5rem" }} // Equal to Tailwind's mt-10
      >
        <div className="flex items-center flex-wrap">
          <div style={containerStyle}>
            <img src={profileImage} alt="Profile" style={circleImgStyle} />
            <h1 className="text-4.5xl mt-4 mb-4 font-bold"> About Me</h1>
            <p style={{ textAlign: "justify" }}>
              Hello! I’m a developer passionate about creating clean and
              effective user experiences. I enjoy working with modern web
              technologies and turning ideas into reality. Let’s build something
              great together. Lorem ipsum dolor sit amet consectetur adipiscing
              elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
              In id cursus mi pretium tellus duis convallis. Tempus leo eu
              aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
              metus bibendum egestas...Lorem ipsum dolor sit amet consectetur
              adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
              placerat. In id cursus mi pretium tellus duis convallis. Tempus
              leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
              lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
              lacinia integer nunc posuere. Ut hendrerit semper vel class aptent
              taciti sociosqu. Ad litora torquent per conubia nostra inceptos
              himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              <br /> <br />
              Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
              cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed
              diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
              bibendum egestas. Iaculis massa nisl malesuada lacinia integer
              nunc posuere. Ut hendrerit semper vel class aptent taciti
              sociosqu.
            </p>
          </div>
        </div>
      </Container>

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
