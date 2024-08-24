import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantNameMenu from "./RestaurantNameMenu";
import RestaurantCardMenu from "./RestaurantCardMenu";
import DiscountCarouselMenu from "./DiscountCarouselMenu";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [discountInfo, setDiscountInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" +
        resId
    );
    const json = await data.json();
    setResInfo(json?.data?.cards[2]);
    setDiscountInfo(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  };

  if (!resInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="parent-div-menu">
      <div className="margin-div-menu">
        <RestaurantNameMenu resData={resInfo} />
        <RestaurantCardMenu resData={resInfo} />
        <DiscountCarouselMenu discountData={discountInfo} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
