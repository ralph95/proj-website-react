import React from "react";

const Spacer = ({ height = "2rem", style = {} }) => {
  return <div style={{ height, ...style }}></div>; // Apply style prop here
};

export default Spacer;
