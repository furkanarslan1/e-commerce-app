import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { logout } from "../../redux/sign_in_up_Slice";
import { router } from "../../App";

export default function UserInfo() {
  const { user } = useSelector((store) => store.sign_in_up);
  const dispatch = useDispatch();

  const logoutUser = (data) => {
    dispatch(logout());
    router.navigate("/");
  };

  if (!user) {
    return (
      <div className="text-white flex justify-center items-center min-h-screen">
        Loading user info...
      </div>
    );
  }

  return (
    <div className=" py-8 h-min-screen flex  justify-center flex-col  relative">
      <div className="flex flex-col gap-10 bg-gradient-to-r from-gray-800 to-gray-500 h-full w-full  p-8 text-white rounded-3xl items-center text-sm md:text-xl">
        <div className="flex items-center gap-4">
          <div className="border-4 rounded-full p-4">
            <FaUserAlt className="text-6xl  p-1" />
          </div>
          <button
            className="cursor-pointer   absolute top-15 right-5"
            onClick={logoutUser}
          >
            <div className="flex flex-col  items-center ">
              <IoMdLogOut className="text-4xl lg:text-6xl" />
              <p className="font-extrabold">Logout</p>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/15 backdrop-blur-3xl shadow-lg">
          <p className="font-extrabold text-white">User Name:</p>
          <p className="text-white">{user.username}</p>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/15 backdrop-blur-3xl shadow-lg">
          <p className="font-extrabold">Name: </p>
          <p>{user.name}</p>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/15 backdrop-blur-3xl shadow-lg">
          <p className="font-extrabold">Surname: </p>
          <p>{user.surname}</p>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/15 backdrop-blur-3xl shadow-lg">
          <p className="font-extrabold">User Name: </p>
          <p>{user.username}</p>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/15 backdrop-blur-3xl shadow-lg">
          <p className="font-extrabold">Country: </p>
          <p>{user.city ? user.country : "Please Add Country "}</p>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/15 backdrop-blur-3xl shadow-lg">
          <p className="font-extrabold">City: </p>
          <p>{user.city ? user.city : "Please Add City "}</p>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/15 backdrop-blur-3xl shadow-lg">
          <p className="font-extrabold">Postal Code: </p>
          <p>{user.postalCode ? user.postalCode : "Please Add Postal Code "}</p>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/15 backdrop-blur-3xl shadow-lg">
          <p className="font-extrabold">Phone Number: </p>
          <p>
            {user.phoneNumber ? user.phoneNumber : "Please Add Phone Number"}
          </p>
        </div>
      </div>
    </div>
  );
}
