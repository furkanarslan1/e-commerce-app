import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCategory } from "../../redux/categorySlice";
import CategoryItem from "../../components/CategoryItem";

export default function Category({}) {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { categoryPageList } = useSelector((store) => store.category);

  useEffect(() => {
    dispatch(getCategory(slug));
  }, [dispatch, slug]);
  return (
    <>
      <div>
        <h1 className="font-bold text-4xl p-6">{slug}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-col-6 px-6 gap-6">
          {categoryPageList?.products?.map((categoryItem) => (
            <CategoryItem key={categoryItem.id} categoryItem={categoryItem} />
          ))}
        </div>
      </div>
    </>
  );
}
