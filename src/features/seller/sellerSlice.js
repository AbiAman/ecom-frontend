import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./sellerService";
import { toast } from "react-toastify";
const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

  export const loginSeller = createAsyncThunk(
    "seller/Sellerlogin",
    async (sellerData, thunkAPI) => {
      try {
        return await authService.sellerLogin(sellerData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message); // Dispatch error message instead of AxiosError
      }
    }
  );
const initialState = {
  seller: getCustomerfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const sellerSlice = createSlice({
  name: "seller",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginSeller.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginSeller.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = true;
      state.seller = action.payload;
      if (state.isSuccess === true) {
      localStorage.setItem("token", action.payload.token);

        toast.success("Seller logged in Successfully");
      }
    })
    .addCase(loginSeller.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload; // Use action.payload which contains the error message
      if (state.isError === true) {
            toast.error("Incorrect emaill or password try again"); // Display the error message
      
    }
    })
    ;
  },
  
});


export default sellerSlice.reducer;
