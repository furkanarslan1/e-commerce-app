import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, Outlet } from "react-router";
export default function Error() {
  return (
    <>
      <h1 className="text-center pt-20 font-bold text-4xl">Error Page</h1>
      <Outlet />
    </>
  );
}
