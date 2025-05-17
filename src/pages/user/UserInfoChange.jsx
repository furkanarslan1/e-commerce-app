import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userChange } from "../../redux/sign_in_up_Slice";
import { router } from "../../App";

export default function UserInfoChange() {
  const { user, users } = useSelector((store) => store.sign_in_up);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(userChange({ ...data, prevUsername: user.username }));
    router.navigate("/user");
  };

  if (!user) {
    return (
      <div className="text-white flex justify-center items-center min-h-screen">
        Loading user info...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center  px-4 bg-gradient-to-r from-gray-800 to-gray-500 py-8 mt-4 rounded-2xl text-sm md:text-xl ">
      <div className="bg-white/10 backdrop-blur-xl border border-white/30 p-12 rounded-2xl shadow-2xl w-full max-w-md md:mb-20 text-white">
        <form
          className="flex flex-col items-center "
          onSubmit={handleSubmit(submit)}
        >
          <div className="pb-8 w-full">
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter a User Name"
              className="w-full border rounded-2xl px-3 py-2 outline-[#0096C7]"
              defaultValue={user.username}
              {...register("username", {
                required: "User Name is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
                // validate: (value) => {
                //   const currentUsername = user?.username || "";
                //   return (
                //     currentUsername !== value || "This username already taken"
                //   );
                // },
                validate: (value) => {
                  const isTaken =
                    users &&
                    users.some(
                      (user) =>
                        user.username.toLowerCase() === value.toLowerCase()
                    );
                  return !isTaken || "Username is already taken";
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="pb-8 w-full">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter a User Name"
              className="w-full border rounded-2xl px-3 py-2 outline-[#0096C7]"
              defaultValue={user?.name || ""}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="pb-8 w-full">
            <label>Surname</label>
            <input
              type="text"
              placeholder="Enter a User Name"
              className="w-full border rounded-2xl px-3 py-2 outline-[#0096C7]"
              defaultValue={user?.surname || ""}
              {...register("surname", {
                required: "surname is required",
                minLength: {
                  value: 3,
                  message: "surname must be at least 3 characters",
                },
              })}
            />
            {errors.surname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.surname.message}
              </p>
            )}
          </div>

          <div className="pb-4 w-full">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter a Password"
              className="w-full border rounded-2xl px-3 py-2 outline-[#0096C7]"
              defaultValue={user?.password || ""}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                  message:
                    "At least one uppercase, one lowercase, and one number required",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="pb-8 w-full">
            <label>Country</label>
            <input
              type="text"
              placeholder="Enter a Country"
              className="w-full border rounded-2xl px-3 py-2 outline-[#0096C7]"
              defaultValue={user.country && user.country}
              {...register("country", {
                required: "country is required",
                minLength: {
                  value: 3,
                  message: "country must be at least 3 characters",
                },
              })}
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          <div className="pb-8 w-full">
            <label>City</label>
            <input
              type="text"
              placeholder="Enter a City"
              className="w-full border rounded-2xl px-3 py-2 outline-[#0096C7]"
              defaultValue={user.city && user.city}
              {...register("city", {
                required: "city is required",
                minLength: {
                  value: 3,
                  message: "surname must be at least 3 characters",
                },
              })}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          <div className="pb-8 w-full">
            <label>Postal Code</label>
            <input
              type="number"
              placeholder="Enter a Postal Code"
              className="w-full border rounded-2xl px-3 py-2 outline-[#0096C7]"
              defaultValue={user.postalCode && user.postalCode}
              {...register("postalCode", {
                required: "Postal Code is required",
                minLength: {
                  value: 1,
                  message: "Postal Code  must be at least 1 characters",
                },
              })}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.postalCode.message}
              </p>
            )}
          </div>

          <div className="pb-8 w-full">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter a Phone Number"
              className="w-full border rounded-2xl px-3 py-2 outline-[#0096C7]"
              defaultValue={user.phoneNumber && user.phoneNumber}
              {...register("phoneNumber", {
                required: "Phone Number is required",
                minLength: {
                  value: 11,
                  message: "Phone Number must be at least 11 characters",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "Phone Number must contain digits only",
                },
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-[#48CAE4] px-4 py-2 rounded-2xl font-bold hover:opacity-60 transition-all duration-700 text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
