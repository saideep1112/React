import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
    currentRestaurant: null,
    showSwitchRestaurantPopup: false,
    pendingItem: null,
    pendingRestaurantId: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const { item, resId } = action.payload;

      if (state.currentRestaurant && state.currentRestaurant != resId) {
        state.showSwitchRestaurantPopup = true;
        state.pendingItem = item;
        state.pendingRestaurantId = resId;
      } else {
        state.currentRestaurant = resId;
        if (state.cartItems[item.id]) {
          state.cartItems[item.id].quantity += 1;
        } else {
          state.cartItems[item.id] = { ...item, quantity: 1 };
        }
      }
    },

    confirmSwitchRestaurant: (state) => {
      state.cartItems = {};
      state.currentRestaurant = state.pendingRestaurantId;

      if (state.pendingItem) {
        state.cartItems[state.pendingItem.id] = {
          ...state.pendingItem,
          quantity: 1,
        };
      }

      state.showSwitchRestaurantPopup = false;
      state.pendingItem = null;
      state.pendingRestaurantId = null;
    },

    cancelSwitchRestaurant: (state) => {
      state.showSwitchRestaurantPopup = false;
      state.pendingItem = null;
      state.pendingRestaurantId = null;
    },

    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      state.cartItems[itemId].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId] && state.cartItems[itemId].quantity > 1) {
        state.cartItems[itemId].quantity -= 1;
      } else {
        delete state.cartItems[itemId];
      }
    },
    clearCart: (state) => {
      state.cartItems = {};
      state.currentRestaurant = null;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  confirmSwitchRestaurant,
  cancelSwitchRestaurant,
} = cartSlice.actions;

export default cartSlice.reducer;
