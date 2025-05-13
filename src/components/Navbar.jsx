import React, { useEffect, useState } from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router";
import { MdFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { getSearch } from "../redux/searchSlice";

export default function Navbar() {
  const { favoriteList } = useSelector((store) => store.favorites);
  const [searchInfo, setSearchInfo] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInfo.trim().length > 1) {
        dispatch(getSearch(searchInfo));
        navigate("/search");
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [searchInfo, dispatch, navigate]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchInfo?.trim()) {
  //     dispatch(getSearch(searchInfo));
  //     navigate("/search");
  //   }
  // };

  const { user } = useSelector((store) => store.sign_in_up);

  return (
    <nav className="px-6 py-4 bg-[#48cae4]">
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="flex text-4xl  gap-6 lg:gap-2 lg:text-3xl">
            <PiShoppingBagFill className="text-5xl lg:text-4xl" />
            <p className="font-extrabold">e-commerce</p>
          </div>
        </Link>

        <div className="hidden md:block">
          {/* <form onSubmit={handleSubmit}> */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder=" Search products"
              className="bg-white lg:w-180 rounded-2xl lg:py-2 lg:px-4 outline-none"
              value={searchInfo}
              onChange={(e) => setSearchInfo(e.target.value)}
            />
            {/* <button type="submit" className="text-2xl cursor-pointer">
              <FaSearch />
            </button> */}
          </div>
          {/* </form> */}
        </div>

        <div className=" items-center lg:gap-12 text-xl hidden md:flex">
          <div>
            <Link to="favorites">
              <MdFavorite
                className={`text-3xl ${
                  favoriteList?.length > 0 ? `text-blue-600 ` : `text-black `
                }`}
              />
            </Link>
          </div>
          <div>
            <Link to="order">
              <p>Orders</p>
            </Link>
          </div>
          <div>
            <Link to="cart">
              <HiShoppingCart className="lg:text-3xl" />
            </Link>
          </div>
          <div className="lg:me-4  bg-gradient-to-r from-[#90E0EF] to-[#48CAE4]  hover:text-black hover:bg-red-700 p-3 rounded-2xl font-bold text-black  hover:cursor-pointer duration-300">
            {user ? (
              <Link to="user">
                <p>{user.username}</p>
              </Link>
            ) : (
              <Link to="sign-in">Sign In</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
