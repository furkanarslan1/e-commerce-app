import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getSearch } from "../redux/searchSlice";

export default function MobileSearch() {
  const [searchInfo, setSearchInfo] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInfo.trim().length > 1) {
        dispatch(getSearch(searchInfo));
        navigate("/search");
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [searchInfo, dispatch, navigate]);

  return (
    <div>
      <div className="px-6">
        <div className="py-4">
          <input
            type="text"
            placeholder=" Search products"
            className="border-2 border-gray-500  w-full px-4 py-4 rounded-2xl  outline-none"
            value={searchInfo}
            onChange={(e) => setSearchInfo(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
