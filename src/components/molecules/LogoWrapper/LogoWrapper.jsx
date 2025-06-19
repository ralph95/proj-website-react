import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/trixera.png";

const LogoWrapper = styled.div`
  position: absolute;
  left: 25px;
  background-color: #f26522;
  color: #0d0d0d;
  font-weight: 800; /* Equivalent to font-extrabold */
  font-size: 1rem; /* 16px default */
  padding: 0.25rem 1rem; /* Slightly more vertical space for smaller screens */
  border-radius: 0.375rem; /* 6px */
  margin: 0;

  &:hover {
    background-color: #e65c1f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #f26522;
  }

  /* Responsive tweaks for smaller screens */
  @media (max-width: 768px) {
    font-size: 0.875rem; /* 14px */
    padding: 0.25rem 0.75rem;
    left: 15px; /* Pull closer to the edge */
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* 12px */
    padding: 0rem 0rem;
    left: 10px;
  }
`;

const LogoImage = styled.img`
  height: 40px; /* Adjust size as needed */
  width: auto;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={logo} alt="RocketCode Logo" />
    </LogoWrapper>
  );
};

export default Logo;
