// src/components/molecules/Menu/Menu.jsx
import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.nav`
  display: flex;
  gap: 20px; /* Spacing between menu items */

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin: 50px 15px 10px 15px; /* Top, Right, Bottom, Left */
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;

    /* Ensure that the text inside the link is centered */
    display: flex;
    align-items: center; /* Vertically centers the text */
    justify-content: center; /* Horizontally centers the text */
    height: 100%; /* Ensures it takes the full height of the parent if needed */

    &:hover {
      background-color: #6b7280; /* Change on hover */
    }
  }
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <a href="#about">Projects</a>
      <a href="#services">Resume</a>
      <a href="#contact">Github</a>
    </MenuWrapper>
  );
};

export default Menu;
