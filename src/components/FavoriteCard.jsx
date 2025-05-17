import React from "react";
import { FaStar } from "react-icons/fa";
import { currenyUSD } from "../utils/format";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { addToFavorite, removeFromFavorite } from "../redux/favoriteSlice";

export default function FavoriteCard({ favorite }) {
  const { title, price, rating, thumbnail, id } = favorite;

  const dispatch = useDispatch();

  const handleAddFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToFavorite(favorite));
  };

  const handleRemoveFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromFavorite(favorite));
  };

  const isInFavorite = useSelector((store) =>
    store.favorites.favoriteList.find((item) => item.id === favorite.id)
  );

  return (
    <Link
      to={`/products/${id}`}
      className="border-1 border-gray-300 rounded-2xl p-6 h-55 flex flex-col items-center justify-center lg:h-60 hover:bg-amber-300 transition-all duration-500 "
    >
      <div className="flex flex-col items-center gap-2">
        <img src={thumbnail} alt="" loading="lazy" />
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
        <div className="flex items-center gap-4">
          <p className="text-green-700 text-[12px] lg:text-[14px]">
            {currenyUSD.format(price)}
          </p>
          <button
            onClick={isInFavorite ? handleRemoveFavorite : handleAddFavorite}
            className="cursor-pointer "
          >
            {isInFavorite ? (
              <FaHeart className="text-blue-500 text-md  hover:scale-130 duration-300" />
            ) : (
              <CiHeart className="text-md hover:text-blue-500 hover:scale-130 duration-300" />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
