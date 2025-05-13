import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";
import { toast } from "react-toastify";

export const getCategories = createAsyncThunk(
  "getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await requests.categories.list();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoryList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      (state.status = "idle"), (state.categoryList = action.payload);
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
      toast.error("Categories  could not be loaded");
    });
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
