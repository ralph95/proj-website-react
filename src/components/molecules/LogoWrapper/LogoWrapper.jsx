import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/trixera.png";

const LogoWrapper = styled.div`
  position: absolute;
  left: 25px;
`;

const LogoImage = styled.img`
  height: 70px; /* Adjust size as needed */
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
