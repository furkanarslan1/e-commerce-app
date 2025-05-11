import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categoriesSlice";
import { homeProductsSlice } from "./homeProductsSlice";
import { productDetailSlice } from "./productDetailSlice";
import { categorySlice } from "./categorySlice";
import { discountSlice } from "./discountSlice";
import { cartSlice } from "./cartSlice";
import { favoriteSlice } from "./favoriteSlice";
import { searchSlice } from "./searchSlice";
import { sign_in_up_Slice } from "./sign_in_up_Slice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    homeProducts: homeProductsSlice.reducer,
    productDetail: productDetailSlice.reducer,
    category: categorySlice.reducer,
    discount: discountSlice.reducer,
    cart: cartSlice.reducer,
    favorites: favoriteSlice.reducer,
    search: searchSlice.reducer,
    sing_in_up: sign_in_up_Slice.reducer,
  },
});
