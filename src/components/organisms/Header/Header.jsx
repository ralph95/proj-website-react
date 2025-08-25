// src/components/organisms/Header/Header.jsx
import React from "react";
import styled from "styled-components";
import polygon from "../../../assets/svg/polygon.svg";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import Menu from "../../molecules/Menu/Menu";
import ButtonWrapper from "../../molecules/ButtonWrapper/ButtonWrapper";
import LogoWrapper from "../../molecules/LogoWrapper/LogoWrapper";
import { motion } from "framer-motion";

// Styled-component for the header
const StyledHeader = styled.header`
  height: 8.3125rem;
  background-color: #0d0d0d;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;

  &::after {
    content: "";
    position: absolute;
    /* Pull the polygon up by 1px so it overlaps header background */
    bottom: calc(-1 * 2.0625rem + 1px);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2.0625rem;
    background: #0d0d0d;

    -webkit-mask-image: url("${polygon}");
    mask-image: url("${polygon}");
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    background-size: contain;
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

  @media (max-width: 480px) {
    &::after {
      width: 75%;
      height: 5.75rem; /* Adjust height for mobile screens */
      bottom: calc(-2 * 1.5rem); /* Adjust bottom dynamically */
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
  justify-content: center; /* Center the menu */
  align-items: center;
  position: relative; /* Ensure logo and button position doesn't affect centering */

  /* Mobile view */
  @media (max-width: 480px) {
    justify-content: space-between; /* space out the two items */
    flex-direction: row; /* keep them side by side */
    justify-content: center;
    padding-left: 100px;
    margin-left: 70px;
  }
`;

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: 0.3,
        duration: 1.2,
      }}
    >
      <StyledHeader>
        <HeaderContainer>
          <LogoWrapper />
          <Menu />
          <ButtonWrapper />
        </HeaderContainer>
      </StyledHeader>
    </motion.div>
  );
};

export default Header;
