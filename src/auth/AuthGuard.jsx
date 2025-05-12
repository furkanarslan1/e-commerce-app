import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
export default function AuthGuard() {
  const { user } = useSelector((store) => store.sign_in_up);

  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return <Outlet />;
}
