import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { currenyUSD } from "../utils/format";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router";
import { router } from "../App";
import { addOrderCart } from "../redux/orderSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  const totalCost = currenyUSD.format(
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-start  pt-20  min-h-screen ">
        <h1 className="font-extrabold text-3xl lg:text-6xl text-center bg-[#48CAE4] p-2 lg:p-4 rounded-3xl text-white">
          Cart is empty
        </h1>
      </div>
    );
  }

  const handleSubmit = () => {
    dispatch(addOrderCart(cartItems));

    router.navigate("/checkout");
  };

  return (
    <div className="">
      <div className="p-2 lg:p-6 lg:max-w-5xl lg:mx-auto ">
        <div className="flex flex-col gap-2 items-center ">
          <h1 className="font-extrabold text-xl lg:text-4xl  text-[#0096C7]">
            My Shopping Cart
          </h1>
          <p className="font-bold text-gray-500 text-sm">
            ({cartItems.length} product){" "}
          </p>

          <p className="text-gray-500 font-bold">
            Cart Total:
            <span className="text-green-700 ps-1">{totalCost}</span>
          </p>
        </div>

        <div className="pt-8 flex flex-col gap-4">
          <div>
            <button
              className="cursor-pointer text-gray-600 border-1 border-gray-300 px-4 rounded-xl font-bold text-md  hover:bg-red-600 hover:text-white transition-all duration-500  "
              onClick={() => dispatch(clearCart())}
            >
              <p>Clear Cart</p>
            </button>
          </div>
          {cartItems?.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center border-t-1 mt-8 py-6 ">
          <div className="flex flex-col lg:flex-row items-center justify-between ">
            <div className="flex flex-col gap-4 text-2xl font-bold text-gray-700">
              <p>Selected products: {cartItems.length}</p>
              <p>
                Cart Total: <span className="text-green-700">{totalCost}</span>
              </p>
            </div>

            <button
              onClick={handleSubmit}
              to="/checkout"
              className="bg-[#0077B6] p-4 lg:p-8 rounded-2xl text-white flex items-center gap-6 cursor-pointer mt-4 lg:mt-0"
            >
              <p> Continue to Checkout</p>
              <button className="">
                <FaArrowCircleRight className="text-2xl" />
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
