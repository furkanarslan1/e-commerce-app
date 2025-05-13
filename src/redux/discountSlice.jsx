import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";
import { toast } from "react-toastify";

export const getHugeSale = createAsyncThunk(
  "getHugeSale",
  async (_, thunkAPI) => {
    try {
      const response = await requests.products.list();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

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
      state.status = "idle";

      state.hugeSale = action.payload;
    });
    builder.addCase(getHugeSale.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
      toast.error("Huge Sale  could not be loaded");
    });
  },
});

export const {} = discountSlice.actions;

export default discountSlice.reducer;
