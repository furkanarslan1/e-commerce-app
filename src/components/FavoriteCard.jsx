import React from "react";
import { FaStar } from "react-icons/fa";
import { currenyUSD } from "../utils/format";
import { Link } from "react-router";

export default function FavoriteCard({ favorite }) {
  const { title, price, rating, thumbnail, id } = favorite;
  return (
    <Link
      to={`/products/${id}`}
      className="border-1 border-gray-300 rounded-2xl p-4 h-55 flex flex-col items-center justify-center lg:h-60 hover:bg-amber-300 transition-all duration-500"
    >
      <div className="flex flex-col items-center gap-2">
        <img src={thumbnail} alt="" />
        <p className="text-[12px] lg:text-sm">
          {title.length > 15 ? `${title.slice(0, 10)}...` : title}
        </p>
        <div className="flex items-center gap-2 text-[10px] lg:text-[14px]">
          <div className="flex items-center">
            {Array.from({ length: rating }, (_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>

          <p>{rating}</p>
        </div>
        <p className="text-green-700 text-[12px] lg:text-[14px]">
          {currenyUSD.format(price)}
        </p>
      </div>
    </Link>
  );
}
