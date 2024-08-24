import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FaArrowRight size={16} color="rgba(2, 6, 12, 0.92)" />
    </div>
  );
};

// Custom Previous Arrow
export const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};
