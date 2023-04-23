import React from "react";
import "../styling/navbar.css";
const ColorSelector = ({
  containerWidth,
  containerHeight,
  margin,
  width,
  height,
  color,
}) => {
  return (
    <article
      className="color-container"
      style={{ width: containerWidth, height: containerHeight, margin: margin }}
    >
      <div
        className="main-color"
        style={{ width: width, height: height, background: color }}
      ></div>
    </article>
  );
};

export default ColorSelector;
