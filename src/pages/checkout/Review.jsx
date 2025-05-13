import React from "react";
import { useSelector } from "react-redux";
import { currenyUSD } from "../../utils/format";

export default function Review() {
  const { orderAddress, orderPay, orderCart } = useSelector(
    (store) => store.order
  );

  const cartItems = orderCart?.cartItems || [];

  const totalCost = currenyUSD.format(
    orderCart.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  console.log("cart", orderCart);
  cartItems.forEach((item) => {
    console.log(item.price, item.quantity);
  });

  return (
    <>
      <div className="flex  items-start justify-between">
        <div className="flex flex-col justify-center gap-2 ">
          <h3 className="pb-2 font-bold">
            <u>User Info</u>
          </h3>
          <div>
            <p>Name: {orderAddress.name}</p>
          </div>
          <div>
            <p>Surname: {orderAddress.surname}</p>
          </div>
          <div>
            <p>Country: {orderAddress.country}</p>
          </div>
          <div>
            <p>City: {orderAddress.city}</p>
          </div>
          <div>
            <p>Phone: {orderAddress.phoneNumber}</p>
          </div>
          <div>
            <p>Postal C.: {orderAddress.postalCode}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <h3 className="pb-2 font-bold">
            <u>Card Info</u>
          </h3>
          <div>
            <p>Card Name: {orderPay.cardName}</p>
          </div>
          <div>
            <p>Card Number: {orderPay.cardNumber}</p>
          </div>
          <div>
            <p>Expiration Date: {orderPay.expiration}</p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex flex-col gap-2">
          <h5 className="font-bold">
            <u>Cart Info</u>
          </h5>
          <p className="font-bold">
            Total: <span className="text-green-700 font-bold">{totalCost}</span>
          </p>
        </div>

        <div className="grid grid-cols-2">
          {orderCart.map((item) => (
            <div className="text-sm flex items-center gap-1">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-20 w-20"
                loading="lazy"
              />
              <div>
                <p>
                  {item.title.length > 10
                    ? `${item.title.slice(0, 10)}..`
                    : item.title}
                </p>
                <div>
                  <p className="text-green-700">
                    {currenyUSD.format(item.price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
