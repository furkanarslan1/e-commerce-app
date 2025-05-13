import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addOrderPay } from "../../redux/orderSlice";

export default function PaymentForm({ handleNext }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const orderPay = (data) => {
    dispatch(addOrderPay(data));
    handleNext();
  };

  return (
    <form
      className="flex flex-col gap-6 text-[16px]"
      onSubmit={handleSubmit(orderPay)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="cardName" className="mb-1">
            Card Name
          </label>
          <input
            type="text"
            placeholder="Enter a name"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("cardName", {
              required: "Card Name is required",
              minLength: {
                value: 3,
                message: "Card Name must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Za-zçığüşöü]+$/i,
                message: "Only letters are allowed",
              },
            })}
          />
          {errors.cardName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.cardName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="cardNumber" className="mb-1">
            Card Number
          </label>
          <input
            type="text"
            placeholder="Enter a surname"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("cardNumber", {
              required: "Card Number is required",
              minLength: {
                value: 13,
                message: "Card Number must be at least 13 characters",
              },
              pattern: {
                value: /^\d{13,19}$/,
                message:
                  "Card number must contain only digits (13 to 19 digits long)",
              },
            })}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.cardNumber.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="expiration" className="mb-1">
            Expiration Date
          </label>
          <input
            type="text"
            placeholder="Enter a  Expiration Date"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("expiration", {
              required: " Expiration Date is required",
              minLength: {
                value: 4,
                message: " Expiration Date must be at least 13 characters",
              },
              pattern: {
                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                message: "Expiration date must be in MM/YY format",
              },
            })}
          />
          {errors.expiration && (
            <p className="text-red-500 text-sm mt-1">
              {errors.expiration.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="ccv" className="mb-1">
            CCV
          </label>
          <input
            type="text"
            placeholder="Enter a CCV"
            className="border border-gray-400 rounded-xl px-3 py-2"
            {...register("ccv", {
              required: "CCV is required",
              minLength: {
                value: 3,
                message: "CCV must be at least 3 characters",
              },
              pattern: {
                value: /^\d+$/,
                message: "CCV  must contain digits only",
              },
            })}
          />
          {errors.ccv && (
            <p className="text-red-500 text-sm mt-1">{errors.ccv.message}</p>
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
