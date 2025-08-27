// src/components/molecules/ButtonWrapper/ButtonWrapper.jsx
import React, { useState } from "react"; // ✅ add useState
import styled from "styled-components";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import LoginModal from "../../organisms/Modal/LoginModal/LoginModal";
import SignUpModal from "../../organisms/Modal/SignUpModal/SignUpModal";

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
`;

const ButtonWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ state for modal
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  return (
    <Wrapper>
      {/* Hide on mobile, show on md+ screens */}
      <div className="hidden md:flex space-x-4">
        <PrimaryButton onClick={() => setIsModalLoginOpen(true)}>
          Login
        </PrimaryButton>
        <PrimaryButton onClick={() => setIsModalOpen(true)}>
          Register
        </PrimaryButton>
      </div>
      <LoginModal open={isModalLoginOpen} onOpenChange={setIsModalLoginOpen} />
      {/* Signup Modal */}
      <SignUpModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </Wrapper>
  );
};

export default ButtonWrapper;
