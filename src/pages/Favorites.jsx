import React from "react";
import { useNavigate } from "react-router";
import { IoChevronBackCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import FavoriteCard from "../components/FavoriteCard";

export default function Favorites() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favoriteList = [] } = useSelector((store) => store.favorites);

  return (
    <div className="py-2  px-1 md:px-6 md:py-4 min-h-screen">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="text-4xl  text-[#0096C7] cursor-pointer"
        >
          <IoChevronBackCircle />
        </button>

        <h1 className="text-2xl font-bold ">My Favorites</h1>
      </div>

      <div>
        {favoriteList?.length < 1 ? (
          <h1>There is no Favorite Product</h1>
        ) : (
          <div className=" grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4 p-8 ">
            {favoriteList?.map((favorite) => (
              <FavoriteCard key={favorite.id} favorite={favorite} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
