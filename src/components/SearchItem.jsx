import React from "react";
import { FaStar } from "react-icons/fa";
import { currenyUSD } from "../utils/format";
import { FaRegHeart } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addToFavorite, removeFromFavorite } from "../redux/favoriteSlice";

export default function SearchItem({ items }) {
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
  } = items;

  const dispatch = useDispatch();

  const handleAddFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToFavorite(items));
  };

  const handleRemoveFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromFavorite(items));
  };

  const isInFavorite = useSelector((store) =>
    store.favorites.favoriteList.find((item) => item.id === items.id)
  );
  return (
    <Link to={`/products/${id}`}>
      <div className="text-black flex flex-col justify-center gap-2 border-1 rounded-2xl p-6 h-[300px] lg:h-[350px]   cursor-pointer hover:bg-amber-300 transition-all duration-500">
        <div>
          <img src={thumbnail} alt={title} loading="lazy" />
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

          <button
            onClick={isInFavorite ? handleRemoveFavorite : handleAddFavorite}
            className="cursor-pointer "
          >
            {isInFavorite ? (
              <FaHeart className="text-blue-500 text-2xl  hover:scale-130 duration-300" />
            ) : (
              <CiHeart className="text-3xl hover:text-blue-500 hover:scale-130 duration-300" />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
