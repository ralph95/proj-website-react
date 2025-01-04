import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  position: absolute;
  left: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <h1>Website</h1>
    </LogoWrapper>
  );
};

export default Logo;
