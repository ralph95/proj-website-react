// src/components/organisms/Header/Header.jsx
import React from "react";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";

const Header = () => {
  return (
    <header class="h-[100px] bg-[#494D5F] flex items-center">
      <div class="max-w-7xl mx-auto p-5 w-full flex justify-between items-center">
        <h1>Website</h1>
        <PrimaryButton>Contact</PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
