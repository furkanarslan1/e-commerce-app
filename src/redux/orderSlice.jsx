import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../utils/storage";

const getOrderAddress = () => {
  const activeUser = getItem("activeUser", null);
  return activeUser?.username ? `orderAddress_${activeUser.username}` : null;
};

const getOrderPay = () => {
  const activeUser = getItem("activeUser", null);
  return activeUser?.username ? `orderPay_${activeUser.username}` : null;
};

const getOrderCart = () => {
  const activeUser = getItem("activeUser", null);
  return activeUser?.username ? `orderCart_${activeUser.username}` : null;
};

const getOrderPlace = () => {
  const activeUser = getItem("activeUser", null);
  return activeUser?.username ? `orderPlace_${activeUser.username}` : null;
};

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderAddress: getItem(getOrderAddress(), {}),
    orderPay: getItem(getOrderPay(), {}),
    orderCart: getItem(getOrderCart(), {}),
    orderPlace: getItem(getOrderPlace(), {}),
  },
  reducers: {
    addOrderAddress: (state, action) => {
      const key = getOrderAddress();
      if (key) {
        state.orderAddress = action.payload;
        setItem(key, state.orderAddress);
        console.log(state.orderAddress);
      }
    },
    addOrderPay: (state, action) => {
      const key = getOrderPay();
      if (key) {
        state.orderPay = action.payload;
        setItem(key, state.orderPay);
        console.log(state.orderPay);
      }
    },
    addOrderCart: (state, action) => {
      const key = getOrderCart();
      if (key) {
        state.orderCart = action.payload;
        setItem(key, state.orderCart);
        console.log(state.orderCart);
      }
    },

    placeOrder: (state, action) => {
      const key = getOrderPlace();
      if (key) {
        state.orderPlace = {
          orderAddress: state.orderAddress,
          orderPay: state.orderPay,
          orderCart: state.orderCart,
        };
        setItem(key, state.orderPlace);
        console.log(state.orderPlace);
      }
    },
  },
});

export const { addOrderAddress, addOrderPay, addOrderCart, placeOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
