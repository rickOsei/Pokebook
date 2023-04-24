import "../styling/homeview.css";
import { useSelector } from "react-redux";

const Title = ({ fontSize, margin }) => {
  const { generalColor } = useSelector((state) => state.generalColor);

  return (
    <h2 className="main-title" style={{ fontSize: fontSize, margin: margin }}>
      Poké
      <span className="main-title-span" style={{ color: generalColor }}>
        book
      </span>
    </h2>
  );
};

export default Title;
