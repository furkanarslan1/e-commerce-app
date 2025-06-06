import React from "react";
import { NavLink, Outlet } from "react-router";

export default function UserLayout() {
  return (
    <div className="py-4 px-4 ">
      <div className="flex items-center justify-center gap-4 ">
        <NavLink to="/user" end className="border-1 p-2 rounded-md">
          User Info
        </NavLink>
        <NavLink to="user-info-change" className="border-1 p-2 rounded-md">
          User Info Change
        </NavLink>
        <NavLink to="/order" className="border-1 p-2 rounded-md">
          Orders
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
