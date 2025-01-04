// src/components/organisms/Header/Header.jsx
import React from "react";
import styled from "styled-components";
import polygon from "../../../assets/svg/polygon.svg";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import Menu from "../../molecules/Menu/Menu";
import ButtonWrapper from "../../molecules/ButtonWrapper/ButtonWrapper";
import LogoWrapper from "../../molecules/LogoWrapper/LogoWrapper";

// Styled-component for the header
const StyledHeader = styled.header`
  height: 8.3125rem;
  background-color: #494d5f;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: calc(
      -1 * 2.0625rem
    ); /* Dynamically position polygon based on its height */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    width: 100%;
    height: 2.0625rem;
    background: #494d5f;

    /* Use imported SVG for masking */
    -webkit-mask-image: url(${polygon});
    mask-image: url(${polygon});

    /* Ensure no repeat of the mask image */
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    background-size: contain; /* Scale polygon within its container */
  }

  /* Media queries to adjust the width based on screen size */
  @media (max-width: 1200px) {
    &::after {
      width: 50%;
      height: 1.75rem; /* Adjust height for responsiveness */
      bottom: calc(-1 * 1.75rem); /* Adjust bottom dynamically */
    }
  }

  @media (max-width: 768px) {
    &::after {
      width: 25%;
      height: 1.5rem; /* Adjust height for smaller screens */
      bottom: calc(-1 * 1rem); /* Adjust bottom dynamically */
    }
  }

  // @media (max-width: 480px) {
  //   &::after {
  //     width: 25%;
  //     height: 1.25rem; /* Adjust height for mobile screens */
  //     bottom: calc(-2 * 1.5rem); /* Adjust bottom dynamically */
  //   }
  // }
`;

// Styled-component for the inner container
const HeaderContainer = styled.div`
  max-width: 1280px; /* Tailwind's max-w-7xl is equivalent to 1280px */
  margin: 0 auto; /* Centers the content */
  padding: 20px; /* Tailwind's p-5 is 1.25rem which is approximately 20px */
  width: 100%;
  display: flex;
  justify-content: center; /* Center the menu */
  align-items: center;
  position: relative; /* Ensure logo and button position doesn't affect centering */
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <LogoWrapper />
        <Menu />
        <ButtonWrapper />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
