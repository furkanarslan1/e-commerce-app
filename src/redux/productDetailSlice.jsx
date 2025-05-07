import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";

export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (id) => {
    try {
      const response = await requests.products.item(id);
      return response;
    } catch (error) {
    } finally {
    }
  }
);

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    items: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.items = action.payload);
    });
  },
});

export const {} = productDetailSlice.actions;
export default productDetailSlice.reducer;
