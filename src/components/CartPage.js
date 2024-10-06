import { useDispatch, useSelector } from "react-redux";
import { useCart } from "./CartContext";
import { decreaseQuantity, increaseQuantity } from "../utils/cartSlice";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  // const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(clearCart());
  };

  if (Object.keys(cartItems).length === 0) {
    return (
      <div className="mt-36 flex flex-col mx-auto w-8/12 justify-center items-center">
        <div className="my-10">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            className="w-80 h-auto"
          ></img>
        </div>
        <div className="text-[#535665] font-bold text-xl">
          Your cart is empty
        </div>
        <div className="text-[#7e808c] font-light text-sm mt-2">
          You can go to home page to view more restaurants
        </div>
        <div className="mt-8">
          <Link to="/">
            <button className="bg-[#ff5200] text-white px-5 py-3 font-semibold">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-36 w-6/12 mx-auto">
      <div className="flex justify-between py-4 items-center">
        <h2 className="text-lg">Your Cart</h2>
        <button
          onClick={handleCart}
          className="text-white bg-[#FF5200] px-4 py-3"
        >
          Clear Cart
        </button>
      </div>
      {Object.values(cartItems).map((item) => (
        <div
          key={item.id}
          className="flex justify-between p-4 border-b w-[100%] items-center"
        >
          <div className="flex w-5/12">
            <div className="flex w-2/12">
              <div>
                {item.itemAttribute.vegClassifier === "NONVEG" ? (
                  <img
                    className="w-5 h-5"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR4nO2Xv0oDQRDGtzOXmRi1VLGyt5AZgwh5E/++g4jiIxmtRNTsFIKgopZG7Iy9CbFX5gx2wSS32b2Q/WDgiluY383OzHfGREVFReVSwvidpzATC2ACSyJAYEmswCRV4KIyPVfn0q4QnAlDQxi+utGwBKeyVtq52SjP5g7gtmISS3gkBO3/RyK0LOOhnjF5ALhcT+Yt4/2gc90yPl+tFpaCAggni0L4MexysoTN60qyEARAr4AQPmbdsJbxQaqm4B1ACI+dWQXCA68AOm36a9h+A1q9ptNIACzjnrvksVuF0rY3gN857xbAMtS8AViCN+cVYGj4BOg4rwBBZ6wBhKDtDUAYXkfQAy/eAFJj5r4HTrwBqKt0DVDn4qbfRcbQcnh9PmWlPOMNQKWW2B0A7g+bx9AAasBSI5b97t8FMXMqtcJqiTN8+Xf9n8iaR6aDmkD6FQdP/in4D83fu1VTUEvcT2Nrw+qdP182U67zyHxQLbG6St0Tuph0Y6ehzww1S8WtXtMmFwCjkESAwJJYgXGvgOQkzMQBREVFRRkf+gHhzjmciMgUEwAAAABJRU5ErkJggg=="
                  ></img>
                ) : (
                  <img
                    className="w-5 h-5"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nO2XwUoDQQyG56be1KMVH8OJTWSvfQq1+g4iFfEoQpPaB7H2Naqox1a8qXdb6r2SrR6LdXd2Zkvnh8DC7sB8m0nmjzFRUVFRpRQITcoUZmkBTGBBBAgsiBlYpgwAw+ZeC4+BsWuZBiD4paHPlvHOMtXpijZKBwAMa7ZJ58A0+rsl4hCEGrrGlAGgel3dskz3/+3rlukZb3AnKMBuO9m2Qh+ZLyjGd2CoBAFIjw3jY+5blukhuUxWvQNYwQtXNsEKnnkF0G4zX8HOGzic1Z0KAsATd5unaRaa+0c+AbrOAYQ63gCs0KtzAKaBPwDGsXsAHC80ADCNvAGA4EsBNdD3BqDGrIAM3HoEoLp7ADzwe5FNXaWrAv5MWsm6N4Cf9w2HGTjNuo/MAGrA1IjlL17sBTFz6TcMldQSZwbAN50n8u4j/0Aj2Mvw55+CDzS/0iOglniewtaC1TNfa9dWXO8j90K1xOoq0wFeqK83dhr6LNQBwcNZ3aYUAEUIIkBgQczAomcAShJm6QCioqKijA99A3yCPIRsuFUZAAAAAElFTkSuQmCC"
                  ></img>
                )}
              </div>
            </div>
            <div className="text-base leading-5 tracking-tight text-[#282c3f] ml-6 w-10/12 font-light">
              {item.name}
            </div>
          </div>
          <div className="flex items-center w-5/12 text-center justify-center">
            <div className="flex items-center border border-[#d4d5d9] text-[#60b246]">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="w-10 h-10 text-lg font-bold flex items-center justify-center"
              >
                -
              </button>
              <span className="w-10 text-center">{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                className="w-10 h-10 text-lg font-bold flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
          <div className="w-2/12 text-right">
            <p className="text-[#535665]">
              ₹{" "}
              {item.price
                ? item.quantity * (item.price / 100)
                : item.quantity * (item.defaultPrice / 100)}
            </p>
          </div>
        </div>
      ))}
      <div className="p-4 flex items-center justify-between">
        <h2>TO PAY </h2>
        <h2>
          ₹{" "}
          {Object.values(cartItems).reduce(
            (acc, item) =>
              acc +
              (item.price
                ? item.quantity * (item.price / 100)
                : item.quantity * (item.defaultPrice / 100)),
            0
          )}
        </h2>
      </div>
    </div>
  );
};
export default CartPage;
