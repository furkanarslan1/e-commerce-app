import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";

export const getCategory = createAsyncThunk("getCategory", async (slug) => {
  try {
    const response = await requests.category.list(slug);
    return response;
  } catch (error) {
    console.log(error);
  } finally {
  }
});

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryPageList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categoryPageList = action.payload;
    });
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
