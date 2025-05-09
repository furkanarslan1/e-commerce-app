import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../utils/storage";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteList: getItem("favorites") || [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const isInFavorite = state.favoriteList.find(
        (favorite) => favorite.id === action.payload.id
      );
      if (!isInFavorite) {
        state.favoriteList.push(action.payload);
      }
      setItem("favorites", state.favoriteList);
    },
    removeFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      setItem("favorites", state.favoriteList);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
