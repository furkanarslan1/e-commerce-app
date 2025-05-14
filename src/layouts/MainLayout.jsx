import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categoriesSlice";
import Categories from "../components/Categories";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import MobileNavbar from "../components/MobileNavbar";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";

export default function MainLayout() {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((store) => store.categories);

  const [loading, setLoading] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["sell", "buy", "enjoy", "happy", "big sale"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 600);

    const timeout = setTimeout(() => {
      setLoading(false);
      dispatch(getCategories());
      clearInterval(wordInterval);
    }, 2000);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(timeout);
    };
  }, [dispatch]);

  const scrollRef = useRef();
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="">
      {loading && (
        <div className="fixed inset-0 bg-gradient-to-r from-blue-950 to-blue-800 flex flex-col items-center justify-center z-[9999] gap-3">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-200 text-6xl font-extrabold pb-2">
            e-commerce
          </h1>
          <p className="text-white text-4xl animate-fade">
            {words[currentWordIndex]}
          </p>
        </div>
      )}

      <Navbar />

      <div className="relative hidden md:block">
        <button
          onClick={scrollLeft}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 text-4xl hidden md:block"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 text-4xl hidden md:block"
        >
          <FaAngleRight />
        </button>
        <div
          ref={scrollRef}
          className="flex items-center bg-[#90e0ef] lg:px-1 py-4 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar"
        >
          {categoryList &&
            categoryList.map((category) => (
              <div key={category.id}>
                <Categories category={category} />
              </div>
            ))}
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose={1000}
        closeOnClick
        draggable
      />

      <main>
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 h-[53px] sm:block lg:hidden ">
        <MobileNavbar />
      </nav>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
