import React from "react";
import { PiShoppingBagFill } from "react-icons/pi";
import { Link } from "react-router";
import { MdFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="px-6 py-4 bg-[#48cae4]">
      <div className="flex items-center justify-between">
        <div className="flex  48cae4 gap-2 lg:text-3xl">
          <PiShoppingBagFill className="lg:text-4xl" />
          <p>e-commerce</p>
        </div>
        <div>
          <input
            type="text"
            placeholder=" Search products"
            className="bg-white lg:w-180 rounded-2xl lg:py-2 lg:px-4 outline-none"
          />
        </div>

        <div className="flex items-center lg:gap-12 text-xl">
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
            <Link>
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
