import { useParams, Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import AccordianCardMenu from "./AccordianCardMenu";
import _ from "lodash";
import { BiArrowBack } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const MenuSearch = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [searchInput, setSearchInput] = useState("");

  const [filteredListOfCards, setFilteredListOfCards] = useState([]);

  const menuInfo =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (menu) =>
        menu?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        menu?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  const listOfCards = [];

  if (listOfCards === undefined) {
    return <div>Loading...</div>;
  }

  if (Array.isArray(menuInfo)) {
    for (i = 0; i < menuInfo.length; i++) {
      if (
        menuInfo[i]?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
        menuInfo[i]?.card?.card?.title !== "Recommended"
      ) {
        listOfCards.push(...menuInfo[i]?.card?.card?.itemCards);
      } else if (
        menuInfo[i]?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      ) {
        listOfCards.push(...menuInfo[i]?.card?.card?.categories[0].itemCards);
      }
    }

    console.log(listOfCards);
  }

  return (
    <div>
      <div className="flex w-7/12 mx-auto mt-10 items-center border-b border-[#dcdde0] py-3">
        <Link to={"/restaurants/" + resId} className="w-1/12 ml-2">
          <div className="w-1/12 ml-2">
            <BiArrowBack size={24} />
          </div>
        </Link>
        <div className="w-10/12 font-light">
          <input
            className="w-[100%] focus:outline-none"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyUp={() => {
              const filteredCards = listOfCards.filter((card) =>
                card?.card?.info?.name
                  .toLocaleLowerCase()
                  .includes(searchInput.toLocaleLowerCase())
              );
              setFilteredListOfCards(filteredCards);
            }}
          ></input>
        </div>
        <div className="w-1/12 flex justify-end mr-2">
          <IoIosSearch size={24} />
        </div>
      </div>
      <div className="w-6/12 flex flex-col justify-center mx-auto mt-4">
        {filteredListOfCards.map((item) => (
          <AccordianCardMenu cardData={item} key={item?.card?.info?.name} />
        ))}
      </div>
    </div>
  );
};

export default MenuSearch;
