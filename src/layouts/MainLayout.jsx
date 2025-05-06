import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categoriesSlice";
import Categories from "../components/Categories";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export default function MainLayout() {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const scrollRef = useRef();
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="relative hidden  md:block">
        <div>
          <button
            onClick={scrollLeft}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 text-4xl bg-opacity-50 hover:cursor-pointer hidden md:block "
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 text-4xl bg-opacity-50 hover:cursor-pointer hidden md:block "
          >
            <FaAngleRight />
          </button>
          <div
            ref={scrollRef}
            className="flex items-center  bg-[#90e0ef] lg:px-1 py-4  overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
          >
            {categoryList &&
              categoryList.map((category) => (
                <Link key={category.id}>
                  <Categories category={category} />
                </Link>
              ))}
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
