import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSuperPrice,
  getMens_shirts,
  getFurniture,
  getTops,
  getProducts,
} from "../redux/homeProductsSlice";
import ProductCard from "../components/ProductCard";
import Products from "../components/Products";
import { Link } from "react-router";

import { FaArrowLeftLong } from "react-icons/fa6";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Home() {
  const [topListRef, isTopListRef] = useIntersectionObserver({
    threshold: 0.2,
  });
  const [mensRef, isMensRefVisible] = useIntersectionObserver({
    threshold: 0.3,
  });
  const [furnitureRef, isFurnitureRefVisible] = useIntersectionObserver({
    threshold: 0.3,
  });

  const mensLoaded = useRef(false);
  const furnitureLoaded = useRef(false);
  const topListLoaded = useRef(false);

  const dispatch = useDispatch();
  const { itemSuperPrice, mens_shirts, furniture, tops, productsList } =
    useSelector((store) => store.homeProducts);
  useEffect(() => {
    dispatch(getSuperPrice());
    if (isMensRefVisible && !mensLoaded.current) {
      dispatch(getMens_shirts());
      mensLoaded.current = true;
    }
    if (isFurnitureRefVisible && !furnitureLoaded.current) {
      dispatch(getFurniture());
      furnitureLoaded.current = true;
    }
    if (isTopListRef && !topListLoaded.current) {
      dispatch(getTops());
      topListLoaded.current = true;
    }
  }, [isMensRefVisible, isFurnitureRefVisible, isTopListRef]);

  const { products } = itemSuperPrice;
  const { products: mensShirtProducts } = mens_shirts;
  const { products: furnitureList } = furniture;
  const { products: topList } = tops;

  return (
    <div>
      <div className="relative overflow-hidden bg-white text-black lg:px-4  lg:py-6">
        <h4 className="font-extrabold text-2xl lg:text-3xl pb-4 pt-2 ps-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600 ">
          Super Price
        </h4>

        <div className="animate-scroll-right whitespace-nowrap w-max flex gap-4 py-4 lg:gap-4">
          {products &&
            [...products, ...products].map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <Link to="categories/smartphones">
          <div className="flex bg-gray-400  flex-col md:flex-row  text-white  items-center hover:cursor-pointer">
            <img
              src={products?.[2]?.images?.[2]}
              alt="smartphones"
              className="object-cover lg:w-70"
              loading="lazy"
            />
            <div className="flex flex-col justify-center gap-2 ">
              <p className="font-extrabold lg:text-2xl   text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
                Smartphones
              </p>
              <p>Treat yourself. Get the new iPhone today!</p>
            </div>
          </div>
        </Link>
        <Link to="categories/laptops">
          <div className="flex bg-[#F3F5F4] flex-col md:flex-row  text-white  items-center hover:cursor-pointer lg:pb-17">
            <img
              src="/images/photo.jpg"
              alt="smartphones"
              className="object-cover lg:w-80"
              loading="lazy"
            />
            <div className="flex flex-col justify-center gap-2 ">
              <p className="font-extrabold lg:text-2xl   text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
                Camera
              </p>
              <p className="text-black ">Capture the Moment. Keep It Forever</p>
            </div>
          </div>
        </Link>
        <Link to="categories/laptops">
          <div className="flex flex-col md:flex-row bg-[#181818]   text-white  items-center hover:cursor-pointer lg:pb-23">
            <img
              src="/images/laptop.jpg"
              alt="Laptop"
              className="object-cover lg:w-70"
              loading="lazy"
            />
            <div className="flex flex-col justify-center gap-2 ">
              <p className="font-extrabold lg:text-2xl   text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
                Laptop
              </p>
              <p>High Performance, Style, and Portability!</p>
            </div>
          </div>
        </Link>
        <Link to="categories/beauty">
          <div className="flex flex-col md:flex-row bg-[#ECEDE8]   text-white  items-center hover:cursor-pointer">
            <img
              src="/images/beauty.jpg"
              alt="smartphones"
              className="object-cover lg:w-70"
              loading="lazy"
            />
            <div className="flex flex-col justify-center gap-2 ">
              <p className="font-extrabold lg:text-2xl   text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
                Beauty
              </p>
              <p className="text-black">Glow, Shine Every Moment!</p>
            </div>
          </div>
        </Link>
        <Link to="categories/home-decoration">
          <div className="flex flex-col md:flex-row bg-[#E7EAE5]   text-white  items-center hover:cursor-pointer lg:pb-6">
            <img
              src="/images/decaration.jpg"
              alt="smartphones"
              className="object-cover lg:w-70"
              loading="lazy"
            />
            <div className="flex flex-col justify-center gap-2 ">
              <p className="font-extrabold lg:text-2xl   text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
                Decoration
              </p>
              <p className="text-black">Beautify Your Home, Touch Your Soul!</p>
            </div>
          </div>
        </Link>
        <Link to="categories/kitchen-accessories">
          <div className="flex flex-col md:flex-row bg-[#E4E4E4]  text-white  items-center hover:cursor-pointer lg:pb-6">
            <img
              src="/images/kitchen.jpg"
              alt="smartphones"
              className="object-cover lg:w-70"
              loading="lazy"
            />
            <div className="flex flex-col justify-center gap-2 ">
              <p className="font-extrabold lg:text-2xl   text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
                Kitchen
              </p>
              <p className="text-black">
                The Best Tools for Delicious Moments!
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="border-b-2 pb-2">
        <h6 className="lg:text-2xl pt-2 font-extrabold ps-3 ">
          The Most Popular Men Shirts
        </h6>
        <div
          className="flex overflow-x-auto no-scrollbar items-center gap-2 lg:py-4 px-2"
          ref={mensRef}
        >
          {mensShirtProducts &&
            mensShirtProducts.map((product) => (
              <Products key={product.id} product={product} />
            ))}
        </div>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  overflow-hidden ">
        <Link to="sale/special-offer">
          <div className="flex items-center justify-center bg-gradient-to-r from-red-800 to-red-400 h-50 ">
            <p className="text-white text-4xl rotate-150  ">
              <FaArrowLeftLong />
            </p>
            <p className="text-white text-4xl rotate-170  ">
              <FaArrowLeftLong />
            </p>
            <p className="text-white text-4xl rotate-160  ">
              <FaArrowLeftLong />
            </p>
            <p className="font-extrabold text-4xl  text-center  text-white">
              Special Offer
            </p>
            <p className="text-white text-4xl rotate-20 ">
              <FaArrowLeftLong />
            </p>
            <p className="text-white text-4xl rotate-40 ">
              <FaArrowLeftLong />
            </p>
            <p className="text-white text-4xl rotate-50 ">
              <FaArrowLeftLong />
            </p>
          </div>
        </Link>
        <Link to="sale/products-on-sale">
          <div className="flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-400 h-50 ">
            <p className="font-extrabold text-4xl  text-center  text-white">
              Products on Sale
            </p>
          </div>
        </Link>
        <Link to="sale/huge-sale">
          <div className="flex items-center justify-center bg-gradient-to-r from-green-900 to-green-400 h-50 ">
            <p className="font-extrabold text-4xl  text-center  text-white">
              Huge Sale
            </p>
            <p className="text-white rotate-45  text-4xl lg:text-6xl font-extrabold pb-5 lg:pb-10">
              75%
            </p>
          </div>
        </Link>
      </div>
      <div>
        <h6 className="lg:text-2xl pt-2 font-extrabold ps-3  ">
          The Most Popular Furniture
        </h6>
        <div
          className="flex overflow-x-auto no-scrollbar items-center lg:py-4 px-2"
          ref={furnitureRef}
        >
          {furnitureList &&
            furnitureList.map((product) => (
              <Products key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-12 lg:px-6 lg:py-2 lg:gap-8 rounded-4xl">
        <Link to="categories/sunglasses" className="rounded-4xl">
          <div className="bg-[#F2F1F6] rounded-4xl ">
            <img
              src="/images/sunglasses.jpg"
              alt="sunglasses"
              className="w-full h-88 object-cover rounded-4xl"
              loading="lazy"
            />
            <p className="text-gray-600 font-bold ps-9 py-1 ">
              Add shine to your style with the latest sunglasses. Don’t miss up
              to 30% off!
            </p>
          </div>
        </Link>
        <Link to="categories/smartphones">
          <div className="bg-[#FAEC34] rounded-4xl">
            <img
              src="/images/vivo.jpg"
              alt="vivo"
              className="w-full h-88 object-cover rounded-4xl"
              loading="lazy"
            />
            <p className="text-black  font-bold py-1 ps-9">
              30% Off on All Chinese Phones!
            </p>
          </div>
        </Link>
        <Link to="categories/beauty">
          <div className="bg-[#D8C6B2] rounded-4xl">
            <img
              src="/images/beauty2.jpg"
              alt="beauty2"
              className="w-full h-88 object-cover rounded-4xl"
              loading="lazy"
            />
            <p className="text-gray-600 font-bold  text-center py-1 ">
              Buy Now, Pay Later
            </p>
          </div>
        </Link>
        <Link to="categories/mens-watches">
          <div className="bg-[#E4C029] rounded-4xl">
            <img
              src="/images/watches.jpg"
              alt="watches"
              className="w-full h-88 object-cover rounded-4xl"
              loading="lazy"
            />
            <p className="text-white font-bold py-1 ps-9">
              Catch the Time, Catch the Deal – 60% Off!
            </p>
          </div>
        </Link>
      </div>
      {/* className="flex overflow-x-auto no-scrollbar items-center lg:py-4 px-2" */}
      <div>
        <h6 className="lg:text-2xl pt-2 font-extrabold ps-3">
          This Year’s Most Loved Dresses Are Here!
        </h6>
        <div
          ref={topListRef}
          className="grid grid-cols-2 md:grid-cols-5 overflow-hidden"
        >
          {topList &&
            topList.map((product) => (
              <Products key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
