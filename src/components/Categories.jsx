import React from "react";
import { Link, NavLink } from "react-router";

export default function Categories({ category }) {
  const { slug } = category;
  return (
    <NavLink to={`categories/${slug}`}>
      <ul className="">
        <li className="md:w-30 lg:w-40 text-center">{category.name}</li>
      </ul>
    </NavLink>
  );
}
