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
      <PrimaryButton>About Me</PrimaryButton>
    </Wrapper>
  );
};

export default ButtonWrapper;
