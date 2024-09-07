// src/components/atoms/Row/Row.js
import React from "react";

const Row = ({ children }) => {
  return <div className="flex flex-wrap justify-between">{children}</div>;
};

export default Row;
