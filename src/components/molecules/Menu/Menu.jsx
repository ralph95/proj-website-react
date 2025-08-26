import React, { useState } from "react";
import styled, { css } from "styled-components";
import SignupModal from "../../organisms/Modal/SignUpModal/SignupModal";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const MenuButton = styled.button`
  display: none;

  @media (max-width: 480px) {
    display: block;
    background: #f8f8f8;
    color: #0d0d0d;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 800;
    margin: 10px;
    z-index: 100;
  }
`;

const MenuWrapper = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin: 10px 0;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d1d5db;

    &:hover {
      background-color: #6b7280;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    background-color: #1f2937;
    border-radius: 8px;
    width: 100%;
    z-index: 50;

    /* Animation base */
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        max-height: 500px; /* big enough to fit content */
        opacity: 1;
        transform: translateY(0);
        padding: 20px 10px;
      `}
  }
`;

// Show only on mobile
const MobileOnly = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>Menu ☰</MenuButton>
      <MenuWrapper $isOpen={isOpen}>
        <a href="#about">Projects</a>
        <a href="#services">Resume</a>
        <a href="https://github.com/ralph95">Github</a>

        <MobileOnly>
          <a href="#contact">Login</a>
          <a
            href="#register" // can be any href
            onClick={(e) => {
              e.preventDefault(); // prevent default anchor navigation
              setIsModalOpen(true); // open modal
            }}
          >
            Register
          </a>
        </MobileOnly>
      </MenuWrapper>
      <SignupModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </Wrapper>
  );
};

export default Menu;
