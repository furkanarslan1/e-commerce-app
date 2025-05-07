import React from "react";
import { FaStar } from "react-icons/fa";
import { currenyUSD } from "../utils/format";
import { FaRegHeart } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link } from "react-router";

export default function CategoryItem({ categoryItem }) {
  const {
    id,
    title,
    description,
    category,
    price,
    rating,
    brand,
    reviews,
    thumbnail,
  } = categoryItem;
  return (
    <Link to={`/products/${id}`}>
      <div className="text-black flex flex-col justify-center gap-2 border-1 rounded-2xl p-6 h-[300px] lg:h-[500px]   cursor-pointer">
        <div>
          <img src={thumbnail} alt={title} />
        </div>
        <div>
          <p className="text-gray-700">
            {" "}
            {title.length > 15 ? `${title.slice(0, 10)}...` : title}
          </p>
        </div>

        <div className="flex  items-center justify-between">
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }, (_, i) => (
              <FaStar className="text-yellow-400" />
            ))}
            <p>{rating}</p>
          </div>
          <p className="font-semibold text-[12px] text-gray-400 hidden lg:block ">
            comments: {reviews.length}
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="text-green-700 font-bold text-2xl">
            {currenyUSD.format(price)}
          </p>

          <button className="hover:cursor-pointer text-2xl text-[#0096C7] hover:text-amber-300 transition-all duration-500">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </Link>
  );
}
