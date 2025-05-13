import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";
import { toast } from "react-toastify";

export const getCategory = createAsyncThunk(
  "getCategory",
  async (slug, thunkAPI) => {
    try {
      const response = await requests.category.list(slug);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

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
      state.status = "idle";

      state.categoryPageList = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.status = "idle";

      state.error = action.payload;
      toast.error("Category could not be loaded");
    });
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
