import React from "react";

export default function Footer() {
  return (
    // <div className="bg-[#48CAE4] flex items-center justify-center mt-5 mb-13 md:mb-0 pb-2">
    <div className="bg-gray-700 flex items-center justify-center mt-5 mb-13 md:mb-0 pb-2 text-white">
      <div className="flex flex-col gap-2 items-center">
        <h4 className="text-4xl font-extrabold ">e-commerce-app</h4>
        <p className="font-bold">
          &copy; 2025 e-commerce-app. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
}
