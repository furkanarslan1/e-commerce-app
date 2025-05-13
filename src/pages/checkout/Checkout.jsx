import React, { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useDispatch } from "react-redux";
import { placeOrder } from "../../redux/orderSlice";
import { router } from "../../App";
import { clearCart } from "../../redux/cartSlice";

const steps = ["Shipping Information", "Payment", "Order Summary"];

const getStepContent = (step, steps, handleNext) => {
  switch (step) {
    case 0:
      return <AddressForm steps={steps} handleNext={handleNext} />;
    case 1:
      return <PaymentForm steps={steps} handleNext={handleNext} />;
    case 2:
      return <Review handleNext={handleNext} />;
    default:
      return "Unknown Step";
  }
};

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };
  const dispatch = useDispatch();

  const orderSubmit = () => {
    dispatch(placeOrder());
    dispatch(clearCart());
    router.navigate("/");
    alert("order completed");
    window.location.reload();
  };

  return (
    <div className="max-w-2xl mx-auto p-4 text-sm md:text-xl overflow-hidden ">
      <div className="flex items-center justify-between mb-8">
        {steps.map((label, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${
                index <= activeStep ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            <div className="ml-2 mr-4 text-[12px] md:text-xl">{label}</div>
            {index < steps.length - 1 && (
              <div className="w-6 h-px bg-gray-400"></div>
            )}
          </div>
        ))}
      </div>

      <div className="mb-6">
        {getStepContent(activeStep, steps, handleNext)}
      </div>

      <div className="flex justify-between">
        {/* {activeStep > 0 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer "
          >
            Back
          </button>
        )} */}

        {activeStep > 0 && activeStep < steps.length && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
          >
            Back
          </button>
        )}

        {activeStep === steps.length - 1 && (
          <button
            onClick={orderSubmit}
            className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
}
