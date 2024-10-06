import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartBar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  if (totalItems === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#60b246] shadow-md py-3 flex justify-between items-center border-t border-gray-200 w-6/12 mx-auto">
      <div className="font-semibold text-sm text-white leading-5 pl-4">
        {totalItems} item added
      </div>
      <Link to={"/cart"}>
        <button className="text-white pr-4 text-sm">VIEW CART</button>
      </Link>
    </div>
  );
};

export default CartBar;
