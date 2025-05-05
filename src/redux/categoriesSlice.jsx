import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";

export const getCategories = createAsyncThunk("getCategories", async () => {
  try {
    const response = await requests.categories.list();
    return response;
  } catch (error) {
  } finally {
  }
});

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
      (state.status = "succeeded"), (state.categoryList = action.payload);
    });
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
