import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addOrderAddress } from "../../redux/orderSlice";

export default function AddressForm({ handleNext }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const orderAddress = (data) => {
    dispatch(addOrderAddress(data));
    handleNext();
  };

  return (
    <form
      className="flex flex-col gap-6 text-[16px]"
      onSubmit={handleSubmit(orderAddress)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter a name"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-zçığüşöü]+$/i,
                message: "Only letters are allowed",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="surname" className="mb-1">
            Surname:
          </label>
          <input
            type="text"
            placeholder="Enter a surname"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("surname", {
              required: "Surname is required",
              minLength: {
                value: 3,
                message: "Surname must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-zçığüşöü]+$/i,
                message: "Only letters are allowed",
              },
            })}
          />
          {errors.surname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.surname.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="country" className="mb-1">
            Country:
          </label>
          <input
            type="text"
            placeholder="Enter a country"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("country", {
              required: "Country is required",
              minLength: {
                value: 3,
                message: "Country must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-zçığüşöü]+$/i,
                message: "Only letters are allowed",
              },
            })}
          />
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="city" className="mb-1">
            City:
          </label>
          <input
            type="text"
            placeholder="Enter a city"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("city", {
              required: "City is required",
              minLength: {
                value: 3,
                message: "City must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-zçığüşöü]+$/i,
                message: "Only letters are allowed",
              },
            })}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="mb-1">
            Phone:
          </label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("phoneNumber", {
              required: "Phone number is required",
              minLength: {
                value: 11,
                message: "Phone number must be at least 11 characters",
              },
              pattern: {
                value: /^\d+$/,
                message: "Phone number must contain digits only",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="postalCode" className="mb-1">
            Postal Code:
          </label>
          <input
            type="number"
            placeholder="Enter postal code"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("postalCode", {
              required: "Postal code is required",
              minLength: {
                value: 1,
                message: "Postal code must be at least 1 character",
              },
            })}
          />
          {errors.postalCode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.postalCode.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="self-end px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-4"
      >
        Next
      </button>
    </form>
  );
}
