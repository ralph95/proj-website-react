// src/components/molecules/ButtonWrapper/ButtonWrapper.jsx
import React, { useState } from "react"; // ✅ add useState
import styled from "styled-components";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import SignupModal from "../../organisms/Modal/SignUpModal/SignupModal";

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
`;

const ButtonWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ state for modal

  return (
    <Wrapper>
      {/* Hide on mobile, show on md+ screens */}
      <div className="hidden md:flex space-x-4">
        <PrimaryButton>Login</PrimaryButton>
        <PrimaryButton onClick={() => setIsModalOpen(true)}>
          Register
        </PrimaryButton>
      </div>

      {/* Signup Modal */}
      <SignupModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </Wrapper>
  );
};

export default ButtonWrapper;
