// src/components/atoms/Column/Column.js
import React from "react";

const Column = ({ children }) => {
  return <div className="flex-grow p-2 min-w-[200px]">{children}</div>;
};

export default Column;
