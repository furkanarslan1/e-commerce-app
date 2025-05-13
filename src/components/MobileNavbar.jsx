import React from "react";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { BsBox2HeartFill } from "react-icons/bs";
import { PiBasketFill } from "react-icons/pi";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router";

export default function MobileNavbar() {
  return (
    <div className="flex items-center justify-around text-3xl bg-[#48CAE4] p-3">
      <Link to="/">
        <RiHomeSmile2Fill />
      </Link>
      <Link to="/search">
        <BsFillSearchHeartFill />
      </Link>
      <Link to="favorites">
        <BsBox2HeartFill />
      </Link>
      <Link to="cart">
        <PiBasketFill />{" "}
      </Link>
      <Link to="user">
        <FaUserLarge />
      </Link>
    </div>
  );
}
