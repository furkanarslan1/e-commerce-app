import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../api/apiClient";

export const getSuperPrice = createAsyncThunk("getSuperPrice", async () => {
  try {
    const response = await requests.categories.smartphones();
    return response;
  } catch (error) {
  } finally {
  }
});

//mens_shirts
export const getMens_shirts = createAsyncThunk("getMens_shirts", async () => {
  try {
    const response = await requests.categories.menshirt();
    return response;
  } catch (error) {
  } finally {
  }
});

//furniture

export const getFurniture = createAsyncThunk("getFurniture", async () => {
  try {
    const response = await requests.categories.furniture();
    return response;
  } catch (error) {
  } finally {
  }
});

//tops

export const getTops = createAsyncThunk("getTops", async () => {
  try {
    const response = await requests.categories.tops();
    return response;
  } catch (error) {
  } finally {
  }
});

// products

export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const response = await requests.products.list();
    return response;
  } catch (error) {
  } finally {
  }
});

export const homeProductsSlice = createSlice({
  name: "categories",
  initialState: {
    itemSuperPrice: [],
    mens_shirts: [],
    furniture: [],
    womens_shoes: [],
    womens_dresses: [],
    mobile_accessories: [],
    tops: [],
    productsList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSuperPrice.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getSuperPrice.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.itemSuperPrice = action.payload);
    });
    //mens_shirts
    builder.addCase(getMens_shirts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getMens_shirts.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.mens_shirts = action.payload);
    });
    //furniture
    builder.addCase(getFurniture.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getFurniture.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.furniture = action.payload);
    });
    //tops
    builder.addCase(getTops.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getTops.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.tops = action.payload);
    });

    //products
    builder.addCase(getProducts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.productsList = action.payload);
    });
  },
});

export const {} = homeProductsSlice.actions;
export default homeProductsSlice.reducer;
