import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>categories</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
