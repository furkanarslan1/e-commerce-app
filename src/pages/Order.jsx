import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderCard from "../components/OrderCard";
import { IoMdClose } from "react-icons/io";

export default function Order() {
  const { orderPlace } = useSelector((store) => store.order);
  const [selectedOrder, setSelectedOrder] = useState(null);

  if (!orderPlace || orderPlace.length === 0) {
    return (
      <div className="bg-orange-300 font-bold  py-4 mt-8 mx-4 text-center rounded ">
        There is no order.
      </div>
    );
  }

  //   return (
  //     <div className="p-4 space-y-6">
  //       {orderPlace.map((order, index) => (
  //         <OrderCard key={index} index={index} order={order} />
  //       ))}
  //     </div>
  //   );

  return (
    <div className="p-4 space-y-4">
      {orderPlace.map((order, index) => (
        <div
          key={index}
          onClick={() => setSelectedOrder({ order, index })}
          className="cursor-pointer bg-white shadow p-4 rounded hover:bg-gray-100 transition"
        >
          <h2 className="font-bold text-lg">Order #{index + 1}</h2>
          <p className="text-sm text-gray-600">
            {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>
      ))}

      {/* Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedOrder(null)}
        >
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-xl relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-2 right-1 text-white hover:text-black text-2xl bg-red-600  rounded-full cursor-pointer transition-all duration-300"
            >
              <IoMdClose />
            </button>
            <OrderCard
              order={selectedOrder.order}
              index={selectedOrder.index}
            />
          </div>
        </div>
      )}
    </div>
  );
}
