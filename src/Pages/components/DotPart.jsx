import React from "react";

const DotPart = ({ size = "4px", color = "black", className = "" }) => {
  return (
    <span
      className={`inline-block rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    ></span>
  );
};

export default DotPart;
