import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";
import { toast } from "react-toastify";

export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (id, thunkAPI) => {
    try {
      const response = await requests.products.item(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
    builder.addCase(getProductDetail.rejected, (state, action) => {
      state.status = "succeeded";
      state.error = action.payload;
      toast.error("Product Detail  could not be loaded");
    });
  },
});

export const {} = productDetailSlice.actions;
export default productDetailSlice.reducer;
