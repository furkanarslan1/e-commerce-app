import React from "react";
import { currenyUSD } from "../utils/format";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  const { thumbnail, title, price, discountPercentage, id } = product;
  const discountedPrice = price * (1 - discountPercentage / 100);

  return (
    <Link to={`products/:${id}`}>
      <div className=" rounded-2xl hover:cursor-pointer hover:bg-[#90e0ef] duration-300 group bg-amber-300 py-4  lg:py-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={thumbnail} alt={title} className="w-62 h-52 object-cover" />
          <p>{product.title}</p>
          <div className="flex flex-col ">
            <p>
              <del>{currenyUSD.format(price)}</del>
            </p>
            <p className="text-green-700">
              <b>{currenyUSD.format(discountedPrice)}</b>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
