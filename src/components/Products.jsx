import React from "react";
import { currenyUSD } from "../utils/format";
import { IoStar } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router";

export default function Products({ product }) {
  const { thumbnail, price, brand, rating, discountPercentage, id } = product;
  const discountedPrice = price * (1 - discountPercentage / 100);

  return (
    <Link to={`products/:${id}`}>
      <div className="hover:cursor-pointer ">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col items-center ">
            <img
              src={thumbnail}
              alt=""
              className=" hover:scale-125 duration-500"
            />
            <p className="font-bold text-gray-500 ">{brand}</p>
          </div>

          <div className="flex items-center gap-2 rounded-4xl px-2">
            {Array.from({ length: Math.round(rating) }, (_, i) => (
              <IoStar key={i} className="text-yellow-400" />
            ))}
            <p className="font-bold text-gray-400">{rating}</p>
          </div>
          <p className="text-sm flex gap-3">
            <del>{currenyUSD.format(price)}</del>
            <span className="font-extrabold text-gray-500">
              Save {discountPercentage}%
            </span>
          </p>
          <div className="flex items-center gap-4">
            <p className="font-extrabold text-green-700">
              {currenyUSD.format(discountedPrice)}
            </p>
            <CiHeart className="text-2xl hover:text-blue-500 hover:scale-130 duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}
