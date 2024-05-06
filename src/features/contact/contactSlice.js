import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import contactService from "./contactService";

export const createQuery = createAsyncThunk(
  "contact/post",
  async (createData, thunkAPI) => {
    try {
      return await contactService.postQuery(createData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Dispatch error message instead of AxiosError
    }
  }
);

const contactState = {
  contact: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: contactState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuery.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.contact = action.payload;
        if (state.isSuccess === true) {
          toast.success("Contact Form Submitted Successfully");
        }
      })
      .addCase(createQuery.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.isLoading = false;
        if (state.isError === true) {
          toast.error("Something went wrong");
        }
      });
  },
});

export default contactSlice.reducer;
