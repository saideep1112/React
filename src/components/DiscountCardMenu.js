import { DISCOUNT_LOGO_URL } from "../utils/constants";

const DiscountCardMenu = ({ disInfo }) => {
  const { offerLogo, header, couponCode, description } = disInfo?.info;
  return (
    <div className="flex mt-5 mr-4">
      <div className="flex items-center bg-white border border-[#02060C26] rounded-[20px] p-3 w-[330px]">
        <div className="h-12 w-12">
          <img
            className="h-12 w-12"
            src={DISCOUNT_LOGO_URL + offerLogo}
            alt=""
          ></img>
        </div>
        <div className="flex flex-col items-start justify-center ml-3 gap-1">
          <div className="font-extrabold text-lg leading-5 tracking-tight text-[#02060CEB] overflow-hidden w-[100%]">
            {header}
          </div>
          <div className="font-bold text-sm leading-5 tracking-tight text-[#02060C73] overflow-hidden w-[100%]">
            {couponCode ? couponCode : description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCardMenu;
