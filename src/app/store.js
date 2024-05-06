import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/user/userSlice";
import productReducer from "../features/products/productSlice"
import blogReducer from "../features/blogs/blogSlice"
import contactReducer from "../features/contact/contactService"

import sellerReducer from "../features/seller/sellerSlice";
import storage from 'redux-persist/lib/storage';
import {  persistReducer } from 'redux-persist';
import {combineReducers} from "@reduxjs/toolkit"

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducer = combineReducers({
  auth: authReducer ,
  product: productReducer,
  blog: blogReducer,
 contact: contactReducer,
 seller:sellerReducer,
});
const persistedReducer = persistReducer(persistConfig , reducer);

export const store = configureStore({
  reducer:persistedReducer
});
