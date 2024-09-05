// src/components/atoms/Input/Input.js
import React from "react";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
