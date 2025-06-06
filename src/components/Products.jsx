import React from "react";
import { currenyUSD } from "../utils/format";
import { IoStar } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../redux/favoriteSlice";
import { FaHeart } from "react-icons/fa";

export default function Products({ product }) {
  const { thumbnail, price, brand, rating, discountPercentage, id } = product;
  const discountedPrice = price * (1 - discountPercentage / 100);
  const dispatch = useDispatch();

  const handleAddFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToFavorite(product));
  };

  const handleRemoveFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromFavorite(product));
  };

  const isInFavorite = useSelector((store) =>
    store.favorites.favoriteList.find((item) => item.id === product.id)
  );

  return (
    <Link to={`products/${id}`}>
      <div className="hover:cursor-pointer text-sm ">
        <div className="flex flex-col justify-center items-center gap-2  ">
          <div className="flex flex-col items-center justify-center h-30 lg:h-80 mb-2">
            <img
              src={thumbnail}
              alt={brand}
              className=" hover:scale-125 h-full lg:h-82 duration-500"
              loading="lazy"
            />
            <p className="font-bold text-gray-500 pb-2 text-[10px] lg:text-lg">
              {brand}
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-4xl px-2 text-[12px] lg:text-lg">
            {Array.from({ length: Math.round(rating) }, (_, i) => (
              <IoStar key={i} className="text-yellow-400" />
            ))}
            <p className="font-bold text-gray-400 text-[10px] lg:text-lg">
              {rating}
            </p>
          </div>
          <p className="text-sm flex items-center gap-3">
            <del className="text-[10px] lg:text-lg">
              {currenyUSD.format(price)}
            </del>
            <span className="font-extrabold text-gray-500 text-[10px] lg:text-sm ">
              {discountPercentage}%
            </span>
          </p>
          <div className="flex items-center gap-4">
            <p className="font-extrabold text-green-700 text-xs md:text-lg">
              {currenyUSD.format(discountedPrice)}
            </p>

            <button
              onClick={isInFavorite ? handleRemoveFavorite : handleAddFavorite}
              className="cursor-pointer "
            >
              {isInFavorite ? (
                <FaHeart className="text-blue-500 text-xl lg:text-2xl hover:text-amber-300 hover:scale-130 duration-300" />
              ) : (
                <CiHeart className="text-xl lg:text-2xl hover:text-blue-500 hover:scale-130 duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
