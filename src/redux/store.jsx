import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categoriesSlice";
import { homeProductsSlice } from "./homeProductsSlice";
import { productDetailSlice } from "./productDetailSlice";
import { categorySlice } from "./categorySlice";
import { discountSlice } from "./discountSlice";
import { cartSlice } from "./cartSlice";
import { favoriteSlice } from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    homeProducts: homeProductsSlice.reducer,
    productDetail: productDetailSlice.reducer,
    category: categorySlice.reducer,
    discount: discountSlice.reducer,
    cart: cartSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
});
