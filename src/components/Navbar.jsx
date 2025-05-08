import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import { Link } from "react-router";
import { MdFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";

export default function Navbar() {
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
          <input
            type="text"
            placeholder=" Search products"
            className="bg-white lg:w-180 rounded-2xl lg:py-2 lg:px-4 outline-none"
          />
        </div>

        <div className=" items-center lg:gap-12 text-xl hidden md:flex">
          <div>
            <Link>
              <MdFavorite className="lg:text-3xl " />
            </Link>
          </div>
          <div>
            <Link>
              <p>Orders</p>
            </Link>
          </div>
          <div>
            <Link to="cart">
              <HiShoppingCart className="lg:text-3xl" />
            </Link>
          </div>
          <div className="lg:me-4 bg-[#0077b6] hover:text-black hover:bg-[#0096c7] p-3 rounded-2xl font-bold text-white hover:cursor-pointer duration-300">
            <Link>Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
