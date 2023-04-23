import React from "react";
import ColorSelector from "./ColorSelector";
import "../styling/colortheme.css";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, setGeneralColor } from "../Features/colorSlice";

const ColorModal = () => {
  const { isColorModalOpen } = useSelector((state) => state.generalColor);
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    dispatch(setGeneralColor(color));
    dispatch(closeModal());
  };

  return (
    <div
      className="color-modal-container"
      style={{ display: isColorModalOpen ? "flex" : "none" }}
    >
      <div className="color-box">
        <div className="color-title">
          <h1>Choose Theme</h1>
        </div>

        <div className="color-group">
          <div className="primary" onClick={() => handleColorChange("#E85382")}>
            <ColorSelector
              width="80px"
              height="80px"
              margin="10px"
              containerWidth="100px"
              containerHeight="100px"
              color="#E85382"
            />
          </div>
          <div
            className="secondary"
            onClick={() => handleColorChange("#39BADF")}
          >
            <ColorSelector
              width="80px"
              height="80px"
              margin="10px"
              containerWidth="100px"
              containerHeight="100px"
              color="#39BADF"
            />
          </div>
          <div
            className="tertiary"
            onClick={() => handleColorChange("#E1A725")}
          >
            <ColorSelector
              width="80px"
              height="80px"
              margin="10px"
              containerWidth="100px"
              containerHeight="100px"
              color="#E1A725"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorModal;
