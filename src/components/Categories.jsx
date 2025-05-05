import React from "react";

export default function Categories({ category }) {
  return (
    <>
      <ul className="">
        <li className=" lg:w-40 text-center">{category.name}</li>
      </ul>
    </>
  );
}
