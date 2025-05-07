import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHugeSale } from "../../redux/discountSlice";
import HugeSaleItem from "../../components/HugeSaleItem";
import { useParams } from "react-router";

export default function HugeSale() {
  const { saletips } = useParams();
  const dispatch = useDispatch();
  const { hugeSale } = useSelector((store) => store.discount);

  const saleConfig = {
    "huge-sale": 75,
    "special-offer": 50,
    "products-on-sale": 40,
  };

  const discount = saleConfig[saletips] || 0;

  useEffect(() => {
    dispatch(getHugeSale());
  }, [dispatch, saletips]);

  return (
    <div className="py-4">
      <h1 className="font-extrabold text-2xl lg:text-5xl pb-4 pt-2 ps-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600">
        {saletips}
        <span className=" font-extrabold text-2xl lg:text-5xl pb-4 pt-2 ps-3  text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-600 transform rotate-25 inline-block">
          75%
        </span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-col-6 px-6 gap-6">
        {hugeSale?.products?.map((huge) => (
          <HugeSaleItem key={huge.id} huge={huge} discount={discount} />
        ))}
      </div>
    </div>
  );
}
