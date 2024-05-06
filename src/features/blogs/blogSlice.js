import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import blogService from "./blogSevice";

export const getAllblogs= createAsyncThunk(
  "blogs/get",
  async (thunkAPI) => {
    try {
      return await blogService.getBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Dispatch error message instead of AxiosError
    }
  }
);
export const getAblog= createAsyncThunk(
  "blog/get",
  async (id ,thunkAPI) => {
    try {
      return await blogService.getBlog(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Dispatch error message instead of AxiosError
    }
  }
);


const blogState = {
  product: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: blogState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllblogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllblogs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getAllblogs.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isLoading = false;
      })
      .addCase(getAblog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAblog.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.singleBlog = action.payload;
      })
      .addCase(getAblog.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isLoading = false;
      })
     
     ;
  },
});

export default blogSlice.reducer;
