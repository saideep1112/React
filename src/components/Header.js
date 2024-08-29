import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" alt="logo" />
      </div>
      <div className="navitems">
        <ul>
          <li>status: {status ? "online" : "offline"}</li>
          <li>
            <Link to="/" className="link-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-item">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link-item">
              Contact us
            </Link>
          </li>
          <li>Cart</li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
