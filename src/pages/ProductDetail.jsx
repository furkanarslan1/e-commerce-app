import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetail } from "../redux/productDetailSlice";
import { TiTick } from "react-icons/ti";
import { currenyUSD } from "../utils/format";
import { FaAngleRight, FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { addToFavorite, removeFromFavorite } from "../redux/favoriteSlice";
import { CiHeart } from "react-icons/ci";

export default function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.productDetail);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);

  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    tags,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    thumbnail,
    images,
    reviews,
    returnPolicy,
  } = items;

  const discountedPrice = price * (1 - discountPercentage / 100);

  const [selectedImage, setSelectedImage] = useState(0);

  const [pcs, setPcs] = useState(1);

  const quantityPlus = () => {
    setPcs((prev) => prev + 1);
  };
  const quantityMinus = () => {
    setPcs((prev) => prev - 1);
  };

  const isInCart = useSelector((store) =>
    store.cart.cartItems?.some((cartItem) => cartItem.id === items.id)
  );

  const scroolRef = useRef();

  const scrolLeft = () => {
    scroolRef.current.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrolRight = () => {
    scroolRef.current.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scroolRef.current) return;
    const scrollLeft = scroolRef.current.scrollLeft;
    const containerWidth = scroolRef.current.offsetWidth;
    const index = Math.round(scrollLeft / containerWidth);
    setSelectedImage(index);
  };

  const scrollToImage = (index) => {
    if (!scroolRef.current) return;
    const containerWidth = scroolRef.current.offsetWidth;
    scroolRef.current.scrollTo({
      left: index * containerWidth,
      behavior: "smooth",
    });
    setSelectedImage(index);
  };

  const handleAddFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToFavorite(items));
  };

  const handleRemoveFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromFavorite(items));
  };

  const isInFavorite = useSelector((store) =>
    store.favorites.favoriteList.find((item) => item.id === items.id)
  );

  return (
    <div className="lg:container lg:mx-auto lg:px-28 lg:py-14 ">
      <div className="flex flex-col lg:flex-row lg:gap-12 relative">
        {/* <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-50 hover:cursor-pointer lg:text-2xl"
          onClick={scrolLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="absolute right-195 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-50 hover:cursor-pointer lg:text-2xl"
          onClick={scrolRight}
        >
          <FaAngleRight />
        </button> */}

        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-50 hover:cursor-pointer lg:text-4xl hidden lg:block"
          onClick={() => selectedImage > 0 && scrollToImage(selectedImage - 1)}
        >
          <FaAngleLeft />
        </button>
        <button
          className="absolute right-115 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-50 hover:cursor-pointer lg:text-4xl hidden lg:block"
          onClick={() =>
            selectedImage < images.length - 1 &&
            scrollToImage(selectedImage + 1)
          }
        >
          <FaAngleRight />
        </button>
        <div className="flex flex-col items-center justify-center">
          {/* <div
            className="max-w-[500px] overflow-x-auto no-scrollbar "
            ref={scroolRef}
          >
            <div className="flex items-center overflow-x-auto w-[1850px]">
              {images &&
                images.map((image, i) => (
                  <div key={i} className=" w-[1250px] ">
                    <img
                      src={image}
                      alt="title"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div> */}
          <div
            className="w-full  overflow-x-auto no-scrollbar scroll-snap-x"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
            ref={scroolRef}
            onScroll={handleScroll}
          >
            <div className="flex lg:w-[900px]">
              {images?.map((image, i) => (
                <div
                  key={i}
                  className="min-w-full h-[600px] scroll-snap-align-center"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <div className="flex items-center p-4 gap-2">
            {images &&
              images.map((image) => (
                <div className="w-20 h-20 hover:cursor-pointer border-1 border-[#0096C7]  rounded-2xl">
                  <img src={image} alt="title" />
                </div>
              ))}
            <div></div>
          </div> */}

          <div className="flex justify-center gap-1 mt-2 lg:hidden">
            {images?.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  selectedImage === i ? "bg-[#0096C7]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          <div className="hidden md:flex gap-2 mt-4">
            {images?.map((image, i) => (
              <div
                key={i}
                className={`w-20 h-20 cursor-pointer rounded-2xl border-2 ${
                  selectedImage === i ? "border-yellow-400" : "border-[#0096C7]"
                } `}
                onClick={() => scrollToImage(i)}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:gap-2 gap-4 p-4">
          <h1 className="font-extrabold text-4xl">{title}</h1>
          {availabilityStatus && (
            <div className="flex items-center justify-between text-[12px]  bg-amber-300 w-40 px-4 p-1 rounded-4xl">
              <p className="font-bold">{availabilityStatus}</p>
              <TiTick className="text-2xl" />
              <p className="font-bold">{stock} pcs</p>
            </div>
          )}
          <p className="text-g">{description}</p>
          <div className="flex flex-col lg:gap-6 gap-4">
            <div className="flex items-center lg:gap-4 gap-6">
              <p className="bg-blue-500 w-45 text-white p-1 rounded-4xl text-center">
                Save{" "}
                <span className="font-extrabold">{discountPercentage}%</span>
              </p>
              <p className="lg:text-xl text-gray-400 font-bold">
                <del>{currenyUSD.format(price)}</del>
              </p>
            </div>
            <p className="font-bold text-2xl lg:text-3xl text-green-700">
              {currenyUSD.format(discountedPrice)}
            </p>
          </div>
          <div className="flex items-center gap-2 lg:pt-2">
            {Array.from({ length: Math.round(rating) }, (_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <p className="text-gray-500">{rating}</p>
          </div>
          <div className="lg:text-sm bg-blue-50 flex flex-col gap-2 px-2 w-50 rounded-xl p-2">
            <p>{warrantyInformation}</p>
            <p>{shippingInformation}</p>
          </div>

          <div className="flex items-center gap-4 p-2 lg:gap-6 pt-2">
            <button onClick={quantityMinus} disabled={pcs < 2}>
              {" "}
              <FaCircleMinus className="lg:text-2xl text-3xl text-[#0096C7] hover:cursor-pointer" />
            </button>
            <p>{pcs} pcs</p>

            <button onClick={quantityPlus}>
              {" "}
              <FaCirclePlus className="lg:text-2xl text-3xl text-[#0096C7] hover:cursor-pointer" />
            </button>
          </div>

          <div className="flex items-center gap-16  pt-2 pb-8">
            {isInCart ? (
              <button
                className="flex items-center gap-4 text-white px-3 py-2 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-500  hover:from-blue-400 hover:to-blue-900 transition-all hover:cursor-pointer  duration-800"
                onClick={() => dispatch(removeFromCart(items.id))}
              >
                <span className="font-bold ">Remove from cart</span>
                <BsFillBasket3Fill className="lg:text-4xl text-6xl" />
              </button>
            ) : (
              <button
                className="flex items-center gap-4 text-white px-3 py-2 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-500  hover:from-blue-400 hover:to-blue-900 transition-all hover:cursor-pointer  duration-800"
                onClick={() => dispatch(addToCart({ ...items, quantity: pcs }))}
              >
                <span className="font-bold ">Add to Cart</span>
                <BsFillBasket3Fill className="lg:text-4xl text-6xl" />
              </button>
            )}

            <button
              onClick={isInFavorite ? handleRemoveFavorite : handleAddFavorite}
              className="cursor-pointer "
            >
              {isInFavorite ? (
                <FaHeart className="text-blue-500 text-2xl hover:text-amber-300 hover:scale-130 duration-300" />
              ) : (
                <CiHeart className="text-3xl hover:text-blue-500 hover:scale-130 duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:pt-10 py-4  px-4">
        <h4 className="font-bold text-2xl lg:text-4xl">Product Details</h4>
        <div className="flex flex-col mt-3 border-1 border-[#0096C7] gap-4 rounded p-4 overflow-hidden">
          <h6 className="font-bold text-xl  lg:text-2xl">
            Technical Specifications
          </h6>
          <p className="text-sm">
            <span className="font-bold text-sm">Category:</span> {category}
          </p>
          <div className="flex items-center gap-1">
            <p className="font-bold text-sm">Tags: </p>
            {tags?.map((tag, i) => (
              <p className="text-sm" key={i}>
                {tag}
                {i < tags.length - 1 ? "," : ""}
              </p>
            ))}
          </div>
          <p>
            <span className="font-bold text-sm">Weight:</span> {weight}
          </p>
          <p className="text-sm">
            <span className="font-bold ">Warranty Information: </span>{" "}
            {warrantyInformation}
          </p>
          <div className="flex items-center gap-1  text-sm">
            <p className="font-bold">Dimensions: </p>
            {dimensions &&
              Object.entries(dimensions).map(([key, value], i) => (
                <p key={i}>
                  {key}:{value}
                  {i < Object.entries(dimensions).length - 1 ? "," : ""}
                </p>
              ))}
          </div>
        </div>
        <div className="lg:py-10 p-4 flex flex-col gap-4">
          <p className="font-bold text-xl ">{brand}</p>

          <p>{description}</p>
          <div className="flex flex-col gap-2 font-bold pt-2">
            <p>{shippingInformation}</p>
            <p>{availabilityStatus}</p>
            <p className="bg-[#2B7FFF] text-center w-50 text-white rounded-2xl p-1">
              {returnPolicy}
            </p>
          </div>
        </div>
        <div>
          {images?.map((image) => (
            <img
              src={image}
              alt={title}
              className="w-full h-full  object-cover "
            />
          ))}
        </div>
        <div className="px-4 pt-4">
          <h5 className="font-extrabold text-2xl lg:text-3xl pb-4">Reviews</h5>
          <div className="flex flex-col gap-8 ">
            {reviews?.map((review, i) => (
              <div className="flex flex-col gap-4 border-1 border-[#0096C7] p-6 rounded-2xl ">
                <div className="flex items-center gap-2">
                  {Array.from({ length: Math.round(review.rating) }, (_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                  <p className="text-gray-500">{review.rating}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser />
                  <p className="font-bold">{review.reviewerName}</p>
                </div>

                <p>{review.comment}</p>

                <p className="text-sm text-gray-400 ">{review.reviewerEmail}</p>
                <p className="text-gray-400 text-sm">
                  Reviewed on:{" "}
                  {new Date(review.date).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
