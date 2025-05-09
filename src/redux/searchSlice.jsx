import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";

export const getSearch = createAsyncThunk("getSearch", async (item) => {
  try {
    const response = await requests.search.search(item);
    return response.products;
  } catch (error) {
    console.log(error);
  }
});

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchList: [],
  },
  status: "idle",
  error: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearch.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.status = "idle";
      state.searchList = action.payload;
    });
  },
});

export const {} = searchSlice.actions;
export default searchSlice.reducer;
