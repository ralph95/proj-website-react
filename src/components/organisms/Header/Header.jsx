// src/components/organisms/Header/Header.jsx
import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import polygon from "../../../assets/svg/polygon.svg";

// Styled-component for the header
const StyledHeader = styled.header`
  height: 8.3125rem;
  background-color: #494d5f;
  display: flex;
  align-items: center;
  position: relative; /* For ::after absolute positioning */
  padding: 0;
  margin: 0; /* Ensure no extra margin */

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    width: 100%;
    height: 2.0625rem;
    background: purple;

    /* Use imported SVG for masking */
    -webkit-mask-image: url(${polygon});
    mask-image: url(${polygon});

    /* Ensure no repeat of the mask image */
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center bottom; /* Ensure it sticks to the bottom */
    mask-position: center bottom; /* Adjust to the bottom of the element */
    background-size: contain; /* Ensure the aspect ratio is maintained */
  }

  /* Media queries to adjust the width based on screen size */
  @media (max-width: 1200px) {
    &::after {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    &::after {
      width: 25%;
    }
  }
`;

// Styled-component for the inner container
const HeaderContainer = styled.div`
  max-width: 1280px; /* Tailwind's max-w-7xl is equivalent to 1280px */
  margin: 0 auto; /* Centers the content */
  padding: 20px; /* Tailwind's p-5 is 1.25rem which is approximately 20px */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <h1>Website</h1>
        <PrimaryButton>Contact</PrimaryButton>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
