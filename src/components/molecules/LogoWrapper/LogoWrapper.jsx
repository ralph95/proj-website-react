import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/rocketlogo.png";

const LogoWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 20px; /* Added for better vertical placement */
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 100px; /* Adjust size as needed */
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
