import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import AccordianCardMenu from "./AccordianCardMenu";
import _ from "lodash";

const MenuSearch = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const menuInfo =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (menu) =>
        menu?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        menu?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  const listOfCards = [];
  let uniqueArray = [];

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

    uniqueArray = _.uniqWith(listOfCards, _.isEqual);

    console.log(uniqueArray);
  }

  return (
    <div className="w-6/12 flex flex-col justify-center mx-auto">
      {uniqueArray.map((item) => (
        <AccordianCardMenu cardData={item} key={item?.card?.info?.name} />
      ))}
    </div>
  );
};

export default MenuSearch;
