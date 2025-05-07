import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categoriesSlice";
import { homeProductsSlice } from "./homeProductsSlice";
import { productDetailSlice } from "./productDetailSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    homeProducts: homeProductsSlice.reducer,
    productDetail: productDetailSlice.reducer,
  },
});
