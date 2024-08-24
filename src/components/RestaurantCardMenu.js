import { MdStars } from "react-icons/md";
import { IoMdBicycle } from "react-icons/io";

const RestaurantCardMenu = ({ resData }) => {
  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feeDetails,
  } = resData?.card?.card?.info;
  return (
    <div className="res-info-card-bg-menu">
      <div className="res-info-card-menu">
        <div className="res-info-card-margin-div-menu"></div>
        <div className="res-info-card-rating-menu">
          <div className="res-info-card-rating-a">
            <MdStars style={{ width: "22px", height: "22px" }} />
          </div>
          <div className="res-info-card-rating-b">
            {avgRating} {"(" + totalRatingsString + ")"}
          </div>
          <div className="res-info-card-rating-c">•</div>
          <div className="res-info-card-rating-b">{costForTwoMessage}</div>
        </div>
        <div className="res-info-card-cuisine-style">
          <div className="res-info-card-cuisine">{cuisines.join(", ")}</div>
        </div>
        <div className="res-info-card-ol-time">
          <div className="res-info-card-line">
            <div className="res-info-card-l-dot"></div>
            <div className="res-info-card-l-line"></div>
            <div className="res-info-card-l-dot"></div>
          </div>
          <div className="res-info-card-outlet-time">
            <div className="res-info-card-outlet">
              <div className="res-info-card-outlet-a">Outlet</div>
              <div className="res-info-card-outlet-b">{areaName}</div>
            </div>
            <div className="res-info-card-time">
              <div className="res-info-card-time-a">
                {sla?.slaString.toLowerCase()}
              </div>
            </div>
          </div>
        </div>
        <hr className="res-info-card-hr-line"></hr>
        <div className="res-info-card-del-km-rupee">
          <div className="res-info-card-del-km-rupee-a">
            <IoMdBicycle style={{ width: "22px", height: "22px" }} />
          </div>
          <div className="res-info-card-del-km-rupee-b">
            {sla.lastMileTravelString} | ₹{feeDetails?.totalFee / 100} Delivery
            fee will apply
          </div>
        </div>
        <div className="res-info-card-margin-div-menu"></div>
      </div>
    </div>
  );
};

export default RestaurantCardMenu;
