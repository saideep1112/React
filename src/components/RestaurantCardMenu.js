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
  } = resData?.cards[2]?.card?.card?.info;

  return (
    <div className="bg-gradient-custom px-4 pb-4 rounded-b-3xl">
      <div className="bg-white border border-[#02060C24] rounded-2xl shadow-[0_8px_16px_0_rgba(0, 0, 0, 0.04)]">
        <div className="mb-5"></div>
        <div className="flex items-center mx-4">
          <div className="w-6 h-6 mr-1 mt-0.5 text-[#339D5F]">
            <MdStars className="h-6 w-6" />
          </div>
          <div className="font-bold text-lg tracking-tighter text-[#02060CEB] leading-5">
            {avgRating} {"(" + totalRatingsString + ")"}
          </div>
          <div className="my-0 mx-2">•</div>
          <div className="font-bold text-lg tracking-tighter text-[#02060CEB] leading-5">
            {costForTwoMessage}
          </div>
        </div>
        <div className="flex items-center my-2 mx-5">
          <div className="cursor-pointer font-bold text-sm leading-4 tracking-tighter text-[#FF5200] decoration-solid decoration-[#FF5200]">
            {cuisines.join(", ")}
          </div>
        </div>
        <div className="flex items-center mx-5 py-1">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-[#C4C4C4]"></div>
            <div className="h-6 w-[1px] bg-[#C4C4C4]"></div>
            <div className="w-2 h-2 rounded-full bg-[#C4C4C4]"></div>
          </div>
          <div className="flex flex-col justify-center ml-3 pr-4 w-[100%]">
            <div className="flex mb-0.5">
              <div className="font-bold text-sm leading-4 text-[#02060CEB] tracking-tight">
                Outlet
              </div>
              <div className="text-center ml-3 font-normal text-sm leading-4 tracking-tight text-[#02060C99]">
                {areaName}
              </div>
            </div>
            <div className="flex mt-2">
              <div className="text-sm font-bold leading-4 tracking-tight text-[#02060CEB]">
                {sla?.slaString.toLowerCase()}
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-t-0 border-x-0 border-b-[#02060C0D] my-3"></hr>
        <div className="flex mx-5 items-center">
          <div className="mt-0.5 w-6 h-6 font-normal text-sm leading-5 tracking-tight text-[#02060C99]">
            <IoMdBicycle className="w-6 h-6" />
          </div>
          <div className="ml-1.5 font-normal text-sm leading-5 tracking-tight text-[#02060C99]">
            {sla.lastMileTravelString} | ₹{feeDetails?.totalFee / 100} Delivery
            fee will apply
          </div>
        </div>
        <div className="mb-5"></div>
      </div>
    </div>
  );
};

export default RestaurantCardMenu;
