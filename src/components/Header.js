import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RiSignalWifiLine, RiSignalWifiOffLine } from "react-icons/ri";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { useSelector } from "react-redux";

const Header = () => {
  const status = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const totalItems = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    null
  );

  return (
    <div className="flex justify-between p-4 shadow-lg fixed top-0 left-0 right-0 bg-white z-[999] w-[100%]">
      <div className="flex w-16 h-16">
        <img src={LOGO_URL} className="w-16 h-16" alt="logo" />
      </div>
      <div className="flex items-center">
        <div>
          <ul className="flex">
            <li className="flex mx-4 text-md font-semibold text-[#3d4152] hover:text-[#ff5200] ">
              status:{" "}
              {status ? (
                <RiSignalWifiLine className="relative top-[0.3rem] mx-2" />
              ) : (
                <RiSignalWifiOffLine className="relative top-[0.3rem] mx-2" />
              )}
            </li>
            <li className="mx-4 text-md font-semibold text-[#3d4152] hover:text-[#ff5200]">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4 text-md font-semibold text-[#3d4152] hover:text-[#ff5200]">
              <Link to="/about">About us</Link>
            </li>
            <li className="mx-4 text-md font-semibold text-[#3d4152] hover:text-[#ff5200]">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="mx-4 text-md font-semibold text-[#3d4152] hover:text-[#ff5200]">
              <div className="flex items-center">
                <Link to="/cart" className="flex items-center relative">
                  <PiShoppingCartSimpleBold
                    size={24}
                  ></PiShoppingCartSimpleBold>
                  <span className="ml-2">Cart</span>
                  {totalItems && (
                    <span className="absolute left-[11] top-[-8] bg-[#ff5100e1] text-white w-5 h-5 text-center text-xs rounded-full pt-[3px]">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </li>
            <li className="mx-4 text-md font-semibold text-[#3d4152] hover:text-[#ff5200]">
              <div className="flex items-center">
                <LuUser size={23}></LuUser>
                <button className="ml-2">Login</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
