import { DISCOUNT_LOGO_URL } from "../utils/constants";

const DiscountCardMenu = ({ disInfo }) => {
  const { offerLogo, header, couponCode, description } = disInfo?.info;
  return (
    <div className="discount-card-menu">
      <div className="discount-card-menu-flex">
        <div className="discount-card-dis-icon">
          <img src={DISCOUNT_LOGO_URL + offerLogo} alt=""></img>
        </div>
        <div className="discount-card-menu-details">
          <div className="discount-card-menu-dis">{header}</div>
          <div className="discount-card-menu-dis-code">
            {couponCode ? couponCode : description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCardMenu;
