import { useParams } from "react-router-dom";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantNameMenu from "./RestaurantNameMenu";
import RestaurantCardMenu from "./RestaurantCardMenu";
import DiscountCarouselMenu from "./DiscountCarouselMenu";
import AccordianNestedMenu from "./AccordianNestedMenu";
import AccordianMenu from "./AccordianMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartBar from "./CartBar";
import { useSelector } from "react-redux";
import SwitchRestaurantPopup from "./SwitchRestaurantPopup";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const [showList, setShowList] = useState(true);

  const menuInfo =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (menu) =>
        menu?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        menu?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  const listOfCards = [];

  if (Array.isArray(menuInfo)) {
    for (i = 0; i < menuInfo.length; i++) {
      if (
        menuInfo[i]?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        listOfCards.push(...menuInfo[i]?.card?.card?.itemCards);
      } else {
        listOfCards.push(...menuInfo[i]?.card?.card?.categories[0].itemCards);
      }
    }
  }

  const showSwitchRestaurantPopup = useSelector(
    (state) => state.cart.showSwitchRestaurantPopup
  );

  if (!resInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-[6/12] mt-32">
      <div className="w-6/12 max-w-6/12 mx-auto mt-5 mb-0">
        <RestaurantNameMenu resData={resInfo} />
        <RestaurantCardMenu resData={resInfo} />
        <DiscountCarouselMenu resData={resInfo} />
        <div className="flex justify-center mt-12">
          <IoRestaurantOutline className="mt-1 mr-2 text-[#02060C99]" />{" "}
          <span className="tracking-widest text-[#02060C99]">MENU</span>
          <IoRestaurantOutline className="mt-1 ml-2 text-[#02060C99]" />
        </div>
        <Link to={"/restaurants/" + resId + "/menuSearch"}>
          <div className="flex mx-2 bg-[#02060C0D] mt-5 py-3 items-center rounded-xl cursor-pointer">
            <div className="w-4/12"></div>
            <div className="w-4/12 text-center">
              <span className="font-normal text-base leading-5 tracking-tight text-[#02060C99]">
                Search for dishes
              </span>
            </div>
            <div className="w-4/12 flex justify-end pr-4">
              <IoIosSearch size={22} className="text-[#02060C99]" />
            </div>
          </div>
        </Link>

        <div className="mx-3 mt-8">
          {menuInfo.map((menu, index) =>
            menu?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
              <AccordianMenu
                menuData={menu}
                key={menu?.card?.card?.title}
                show={index === showIndex && showList}
                setShowIndex={() => {
                  if (showIndex === index) {
                    setShowList(!showList);
                  } else {
                    setShowIndex(index);
                    setShowList(true);
                  }
                }}
              />
            ) : (
              <AccordianNestedMenu
                menuData={menu}
                key={menu?.card?.card?.title}
              />
            )
          )}
        </div>
        {showSwitchRestaurantPopup && <SwitchRestaurantPopup />}
        <CartBar />
      </div>
    </div>
  );
};

export default RestaurantMenu;
