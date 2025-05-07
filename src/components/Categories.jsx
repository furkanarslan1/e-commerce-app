import React from "react";
import { Link } from "react-router";

export default function Categories({ category }) {
  const { slug } = category;
  return (
    <Link to={`categories/${slug}`}>
      <ul className="">
        <li className=" lg:w-40 text-center">{category.name}</li>
      </ul>
    </Link>
  );
}
