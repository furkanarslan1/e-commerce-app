import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchItem from "../components/SearchItem";
import { getSearch } from "../redux/searchSlice";

export default function Search() {
  const { searchList } = useSelector((store) => store.search);
  const [searchInfo, setSearchInfo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInfo.trim().length > 1) {
        dispatch(getSearch(searchInfo));
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInfo, dispatch]);

  return (
    <div className="p-4">
      {/* 🔍 Search input sadece mobilde gösterilir */}
      <input
        type="text"
        className="block md:hidden border border-gray-500 outline-[#48CAE4] p-2 w-full rounded-2xl"
        placeholder="Search"
        value={searchInfo}
        onChange={(e) => setSearchInfo(e.target.value)}
      />

      <h1 className="font-bold text-gray-500 py-4 text-xl md:text-2xl">
        Search Results:
      </h1>

      {searchList?.length ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {searchList.map((item) => (
            <SearchItem key={item.id} items={item} />
          ))}
        </div>
      ) : (
        <p className="font-bold text-center pt-12 text-4xl">No results found</p>
      )}
    </div>
  );
}
