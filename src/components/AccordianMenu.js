import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import AccordianCardMenu from "./AccordianCardMenu";
import { useState } from "react";

const AccordianMenu = ({ menuData, show, setShowIndex }) => {
  const handleShowList = () => {
    setShowIndex();
  };

  const { title, itemCards } = menuData?.card?.card;
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between py-4 cursor-pointer"
        onClick={handleShowList}
      >
        <div className="font-extrabold text-lg leading-5 tracking-tight text-[#02060CEB]">
          {title}
        </div>
        <div className="w-6 h-6">
          {show ? (
            <RiArrowUpSLine className="w-6 h-6" />
          ) : (
            <RiArrowDownSLine className="w-6 h-6" />
          )}
        </div>
      </div>
      {show && (
        <div>
          {itemCards.map((item) => (
            <AccordianCardMenu cardData={item} key={item?.card?.info?.id} />
          ))}
        </div>
      )}

      <div className="h-4 bg-[#02060C0D]"></div>
    </div>
  );
};

export default AccordianMenu;
