import React from "react";
import { useSelector } from "react-redux";
import SearchItem from "../components/SearchItem";

export default function Search() {
  const { searchList } = useSelector((store) => store.search);
  if (!searchList?.length)
    return (
      <p className="font-bold text-center pt-12 text-4xl">No results found</p>
    );

  return (
    <div className="p-4">
      <h1 className="font-bold text-gary-500 py-4 text-xl md:text-2xl">
        Search Results:
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {searchList?.map((item) => (
          <SearchItem key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
}
