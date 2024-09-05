import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RiSignalWifiLine, RiSignalWifiOffLine } from "react-icons/ri";

const Header = () => {
  const status = useOnlineStatus();

  return (
    <div className="flex justify-between p-4 shadow-lg">
      <div className="flex w-16 h-16">
        <img src={LOGO_URL} className="w-16 h-16" alt="logo" />
      </div>
      <div className="flex items-center">
        <div>
          <ul className="flex">
            <li className="flex mx-4 text-md font-semibold text-[#3d4152] hover:text-[#ff5200]">
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
              <button>Cart</button>
            </li>
            <li className="mx-4 text-md font-semibold text-[#3d4152] hover:text-[#ff5200]">
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
