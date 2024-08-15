import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
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
  };
  return (
    <div>
      <h1>{resInfo?.card?.card?.info?.name}</h1>
      <h1>{resInfo?.card?.card?.info?.name}</h1>
      <h1>{resInfo?.card?.card?.info?.name}</h1>
      <h1>{resInfo?.card?.card?.info?.name}</h1>
      <h1>{resInfo?.card?.card?.info?.name}</h1>
      <h1>{resInfo?.card?.card?.info?.name}</h1>
    </div>
  );
};

export default RestaurantMenu;
