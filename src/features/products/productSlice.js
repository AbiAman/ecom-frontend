import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import productService from "./productService";
import { toast } from "react-toastify";

export const getAllproducts = createAsyncThunk(
  "product/get",
  async (data, thunkAPI) => {
    try {
      return await productService.getProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Dispatch error message instead of AxiosError
    }
  }
);
export const getAproduct = createAsyncThunk(
  "product/getAproduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Dispatch error message instead of AxiosError
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (prodId, thunkAPI) => {
    try {
      return await productService.addToWishlist(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Dispatch error message instead of AxiosError
    }
  }
);
export const addRating = createAsyncThunk(
  "product/rating",
  async (data, thunkAPI) => {
    try {
      return await productService.rateProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Dispatch error message instead of AxiosError
    }
  }
);

const productState = {
  product: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllproducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllproducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllproducts.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = "Product Added to Wishlist";
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(getAproduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAproduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.singleproduct = action.payload;
        state.message = "Product Fetched successfully";
      })
      .addCase(getAproduct.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(addRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.rating = action.payload;
      })
      .addCase(addRating.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
