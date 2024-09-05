import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const NextArrow = ({ onClick }) => {
  return (
    <div
      className="block absolute top-[-75px] z-10 cursor-pointer bg-[#02060C26] py-2 pr-3 pl-1 right-2 rounded-full mt-12"
      onClick={onClick}
    >
      <FaArrowRight
        className="relative left-1"
        size={16}
        color="rgba(2, 6, 12, 0.92)"
      />
    </div>
  );
};

// Custom Previous Arrow
export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="block absolute top-[-75px] z-10 cursor-pointer bg-[#02060C26] py-2 pr-3 pl-1 right-12 rounded-full mt-12"
      onClick={onClick}
    >
      <FaArrowLeft
        className="relative left-1"
        size={16}
        color="rgba(2, 6, 12, 0.92)"
      />
    </div>
  );
};
