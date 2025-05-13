import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router";
export default function NotFound() {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-12 font-bold">
        <h1 className="text-2xl">Not Found Page</h1>
        <Link
          to="/home"
          className="p-4 bg-red-600 text-white rounded-md font-bold  lg:text-2xl"
        >
          <div className="flex items-center gap-4">
            <FaArrowCircleLeft />
            <p>Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
