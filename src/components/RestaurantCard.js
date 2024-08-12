import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    sla,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-media">
          <img src={CDN_URL + cloudinaryImageId} />
          {aggregatedDiscountInfoV3 && (
            <div className="discount">
              <p>
                {aggregatedDiscountInfoV3?.header}{" "}
                {aggregatedDiscountInfoV3?.subHeader}
              </p>
            </div>
          )}
          <div className="delivery-time">{sla.deliveryTime} mins</div>
          <div className="bookmark"></div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">{name}</p>
              <p className="place-speciality">{cuisines.join(", ")}</p>
            </div>
            <div className="place-review">
              <p className="rating">{avgRating} &#x2605;</p>
              <p className="per-person"> {costForTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
