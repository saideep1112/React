import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantNameMenu from "./RestaurantNameMenu";
import RestaurantCardMenu from "./RestaurantCardMenu";
import DiscountCarouselMenu from "./DiscountCarouselMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="parent-div-menu">
      <div className="margin-div-menu">
        <RestaurantNameMenu resData={resInfo} />
        <RestaurantCardMenu resData={resInfo} />
        <DiscountCarouselMenu resData={resInfo} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
