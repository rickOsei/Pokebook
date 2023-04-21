import React from "react";
import "../styling/homeview.css";

const Title = ({ fontSize, margin }) => {
  return (
    <h2 className="main-title" style={{ fontSize: fontSize, margin: margin }}>
      Poké
      <span className="main-title-span">book</span>
    </h2>
  );
};

export default Title;
