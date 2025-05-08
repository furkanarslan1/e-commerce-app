import React from "react";
import { currenyUSD } from "../utils/format";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { FaTrash } from "react-icons/fa";

export default function CartItem({ item }) {
  const { title, thumbnail, price, category, quantity } = item;

  const dispatch = useDispatch();

  console.log(item);
  return (
    <div className="flex items-center justify-between border border-gray-300 px-4 py-2 rounded-2xl shadow-xl ">
      <div className="flex items-center ">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-20 lg:w-50 lg:h-50 "
        />
        <div className="flex flex-col gap-2 justify-center items-start">
          <p className="font-bold  text-gray-500 text-[12px] lg:text-xl">
            {title}
          </p>
          <p className="  text-gray-500">
            1 pcs{" "}
            <span className="text-green-700">{currenyUSD.format(price)}</span>
          </p>
          <div className="flex items-center gap-4 p-2 lg:gap-6 pt-2">
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              {" "}
              <FaCircleMinus className=" text-xl text-[#0096C7] hover:cursor-pointer" />
            </button>
            <p>{quantity} pcs</p>

            <button>
              {" "}
              <FaCirclePlus
                onClick={() => dispatch(increaseQuantity(item.id))}
                className=" text-xl text-[#0096C7] hover:cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <p className="text-sm lg:text-lg text-green-700 font-extrabold ">
          {currenyUSD.format(quantity * price)}
        </p>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="cursor-pointer text-xl lg:text-2xl  text-red-600   hover:opacity-50 transition-all duration-300"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
