import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";
import { toast } from "react-toastify";

export const getSearch = createAsyncThunk(
  "getSearch",
  async (item, thunkAPI) => {
    try {
      const response = await requests.search.search(item);
      return response.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchList: [],
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearch.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.status = "idle";
      state.searchList = action.payload;
    });
    builder.addCase(getSearch.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
      toast.error("Search  could not be loaded");
    });
  },
});

export const {} = searchSlice.actions;
export default searchSlice.reducer;
