import React from "react";
import { BsEyeFill } from "react-icons/bs";
const ViewButton = ({ handleClick }) => {
  return (
    <button className="view-btn" onClick={handleClick}>
      View Pokemon <BsEyeFill />
    </button>
  );
};

export default ViewButton;
