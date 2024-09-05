import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import AccordianCardMenu from "./AccordianCardMenu";
import { useState } from "react";

const AccordianNestedArrowMenu = ({ menuData }) => {
  const [showList, useShowList] = useState(false);

  const handleShowList = () => {
    useShowList(!showList);
  };
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between pt-6 pb-6 border-b border-b-[#02060C0D] cursor-pointer"
        onClick={handleShowList}
      >
        <div className="font-bold text-[16px] text-[#02060CEB] tracking-tight leading-5">
          {menuData?.title}
        </div>
        <div className="w-6 h-6">
          {showList ? (
            <RiArrowUpSLine className="w-6 h-6" />
          ) : (
            <RiArrowDownSLine className="w-6 h-6" />
          )}
        </div>
      </div>
      {showList && (
        <div>
          {menuData?.itemCards.map((item) => (
            <AccordianCardMenu cardData={item} key={item?.card?.info?.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordianNestedArrowMenu;
