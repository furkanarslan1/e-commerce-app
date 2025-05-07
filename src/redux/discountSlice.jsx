import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";

export const getHugeSale = createAsyncThunk("getHugeSale", async () => {
  try {
    const response = await requests.products.list();
    return response;
  } catch (error) {
    console.log(error);
  } finally {
  }
});

export const discountSlice = createSlice({
  name: "discount",
  initialState: {
    hugeSale: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHugeSale.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getHugeSale.fulfilled, (state, action) => {
      state.hugeSale = action.payload;
    });
  },
});

export const {} = discountSlice.actions;

export default discountSlice.reducer;
