import { CDN_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    aggregatedDiscountInfoV3,
    areaName,
  } = resData?.info;

  return (
    <div className="w-60 m-4">
      <div className="flex flex-col">
        <div className="h-40">
          <div className="w-60 h-40 flex flex-col">
            <img
              src={CDN_URL + cloudinaryImageId}
              className="block object-cover w-60 h-40 rounded-xl"
            />
          </div>
          <div className="w-[100%] h-14 bg-gradient-to-b from-[#1b1e2400] to-[#1b1e24] relative bottom-14 rounded-xl">
            <div className="absolute w-[100%]">
              <h3 className="absolute left-3 top-5 text-[#fffffff0] font-proximanova text-2xl tracking-tighter">
                {aggregatedDiscountInfoV3?.header}{" "}
                {aggregatedDiscountInfoV3?.subHeader}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 ml-2">
          <div>
            <p className="text-lg font-bold tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis">
              {name}
            </p>
          </div>
          <div className="flex">
            <div className="flex">
              <div className="w-6 h-6 text-[#298d52] mt-0.5">
                <MdStars style={{ width: "22px", height: "22px" }} />
              </div>
              <div>
                <p className="font-medium">{avgRating} • </p>
              </div>
            </div>

            <div className="ml-1 font-normal">
              <p>{sla.slaString}</p>
            </div>
          </div>
          <div>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[#02060C99] font-medium">
              {cuisines.join(", ")}
            </p>
          </div>
          <div>
            <p className="text-[#02060C99] font-medium mt-[-3]"> {areaName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    <div>
      <label>Promoted</label>
      <RestaurantCard {...props} />
    </div>;
  };
};

export default RestaurantCard;
