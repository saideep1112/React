import { useDispatch } from "react-redux";
import {
  confirmSwitchRestaurant,
  cancelSwitchRestaurant,
} from "../utils/cartSlice";

const SwitchRestaurantPopup = () => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(confirmSwitchRestaurant());
  };

  const handleCancel = () => {
    dispatch(cancelSwitchRestaurant());
  };

  return (
    <div>
      <div className="fixed bottom-10 left-0 right-0 mx-auto max-w-lg p-8 bg-white border shadow-lg shadow-[#282c3f] z-50 animate-[popup_0.3s_ease]">
        <h1 className="font-bold text-xl tracking-tight text-[#282c3f] pb-2">
          Items already in cart
        </h1>
        <p className="mb-4 text-[#535665] text-sm font-light leading-5">
          Your cart contains items from other restaurant. Would you like to
          reset your cart for adding items from this restaurant?
        </p>
        <div className="flex flex-row">
          <button
            className="px-4 py-3 bg-white text-[#60b246] border-[2px] border-[#60b246] mr-2 font-semibold w-6/12"
            onClick={handleCancel}
          >
            NO
          </button>
          <button
            className="px-4 py-3 bg-[#60b246] text-white border-[2px] border-[#60b246] ml-2 font-semibold w-6/12"
            onClick={handleConfirm}
          >
            YES, START AFRESH
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwitchRestaurantPopup;
