import React from "react";
import { currenyUSD } from "../utils/format";

export default function OrderCard({ order, index }) {
  const totalPrice = order.orderCart?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div>
      <div
        key={index}
        className="bg-white shadow-md p-4 rounded-md border border-gray-200"
      >
        <h2 className="text-xl font-bold mb-2">
          Order #{index + 1} –{" "}
          <span className="text-sm text-gray-600">
            {new Date(order.createdAt).toLocaleString()}
          </span>
        </h2>

        <div className="mb-2">
          <p>
            <strong>Address:</strong> {order.orderAddress?.city || "N/A"}
          </p>
          <p>
            <strong>Payment:</strong> {order.orderPay?.cardName || "N/A"}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Items:</h3>
          <ul className="list-disc ml-5">
            {order.orderCart?.map((item, idx) => (
              <li key={idx}>
                {" "}
                {item.title} – {item.price}$ × {item.quantity}
                <img src={item.thumbnail} alt={item.title} className="h-10" />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 font-bold text-lg">
          Total:{" "}
          <span className="text-green-700">
            {" "}
            {currenyUSD.format(totalPrice) || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
