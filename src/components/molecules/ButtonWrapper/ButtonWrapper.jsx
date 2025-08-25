// src/components/molecules/ButtonWrapper/ButtonWrapper.jsx
import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton"; // Import the button atom

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
`;

const ButtonWrapper = () => {
  return (
    <Wrapper>
      {/* Hide on mobile, show on md+ screens */}
      <div className="hidden md:flex space-x-4">
        <PrimaryButton>Login</PrimaryButton>
        <PrimaryButton>Register</PrimaryButton>
      </div>
    </Wrapper>
  );
};

export default ButtonWrapper;
