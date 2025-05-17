import React from "react";
import { FaStar } from "react-icons/fa";
import { currenyUSD } from "../utils/format";
import { FaRegHeart } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addToFavorite, removeFromFavorite } from "../redux/favoriteSlice";

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

  const dispatch = useDispatch();

  const handleAddFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToFavorite(categoryItem));
  };

  const handleRemoveFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromFavorite(categoryItem));
  };

  const isInFavorite = useSelector((store) =>
    store.favorites.favoriteList.find((item) => item.id === categoryItem.id)
  );
  return (
    <NavLink to={`/products/${id}`}>
      <div className="text-black flex flex-col justify-center gap-2 border-1 rounded-2xl p-6 h-[250px] lg:h-[500px]   cursor-pointer ">
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
          <div className="flex items-center gap-1 text-xs lg:text-xl">
            {Array.from({ length: rating }, (_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <p>{rating}</p>
          </div>
          <p className="font-semibold text-[12px] text-gray-400 hidden lg:block ">
            comments: {reviews.length}
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="text-green-700 font-bold text-xs md:text-lg lg:text-2xl">
            {currenyUSD.format(price)}
          </p>

          <button
            onClick={isInFavorite ? handleRemoveFavorite : handleAddFavorite}
            className="cursor-pointer text-xl md:text-2xl lg:text-3xl"
          >
            {isInFavorite ? (
              <FaHeart className="text-blue-500  hover:text-amber-300 hover:scale-130 duration-300" />
            ) : (
              <CiHeart className=" hover:text-blue-500 hover:scale-130 duration-300" />
            )}
          </button>
        </div>
      </div>
    </NavLink>
  );
}
