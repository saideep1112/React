import DiscountCardMenu from "./DiscountCardMenu";
import { NextArrow, PrevArrow } from "./CustomerArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const DiscountCarouselMenu = ({ discountData }) => {
  let cnt = 0;
  var settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="discount-carousel">
      <div className="discount-carousel-heading">Deals for you</div>
      <div>
        <Slider {...settings}>
          {discountData.map((dis) => (
            <DiscountCardMenu key={dis?.info?.offerIds[0]} disInfo={dis} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscountCarouselMenu;
