import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpSubmit } from "../redux/sign_in_up_Slice";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(signUpSubmit(data));
  };

  return (
    <div className="min-h-screen flex justify-center items-center text-2xl text-gray-600 backdrop-blur-xl bg-[url('/images/bg.jpg')] md:bg-[url('/images/bg-2.jpg')] bg-repeat md:bg-no-repeat md:bg-cover bg-bottom md:bg-top px-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/30 p-12 rounded-2xl shadow-2xl w-full max-w-md md:mb-20 text-white md:text-black">
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
              {...register("username", {
                required: "User Name is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
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

          <div className="pb-4 w-full">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Enter a Password"
              className="w-full border rounded-2xl px-3 py-2 outline-[#0096C7]"
              {...register("confirmpassword", {
                required: "Confirm Password required",
                minLength: {
                  value: 6,
                  message: "Confirm Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                  message:
                    "At least one uppercase, one lowercase, and one number required",
                },
                validate: (value) =>
                  value === password || "Password do not match",
              })}
            />
            {errors.confirmpassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-start p-2 gap-4  w-full ">
            <input
              type="checkbox"
              name="term"
              id="term"
              className="cursor-pointer"
              {...register("term", { required: "You must accept the terms" })}
            />
            <label htmlFor="term" className="text-sm border-b-2">
              Accept terms and conditions
            </label>
          </div>
          {errors.term && (
            <p className="text-red-500 text-sm mt-1">{errors.term.message}</p>
          )}

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
