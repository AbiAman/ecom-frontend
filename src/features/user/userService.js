import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config1 = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    return response.data;
  }
};
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};
const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};
const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};
const getCart = async (data) => {
  const response = await axios.get(`${base_url}user/cart`, data);
  if (response.data) {
    return response.data;
  }
};

const removeProduactFromCart = async (cartItemId) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const emptyCart = async () => {
  const response = await axios.delete(`${base_url}user/empty`, config);
  if (response.data) {
    return response.data;
  }
};
const updateProduactFromCart = async (cartItem) => {
  console.log(cartItem);
  const response = await axios.delete(
    `${base_url}user/update-product-cart/${cartItem.cartItemId}/${cartItem.quantity}`,
    config
  );
  if (response.data) {
    return response.data;
  }
};
const createOrder = async (orderDetail) => {
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetail,
    config
  );
  if (response.data) {
    return response.data;
  }
};

const updateUser = async (data) => {
  try {
    const response = await axios.put(
      `${base_url}user/edit-user`,
      data.data,
      data.config2
    );
    if (response.data) {
      return response.data;
    } // Return data on success
  } catch (error) {
    throw new Error(error.response.data.message); // Throw error on failure
  }
};
const forgotPassToken = async (data) => {
  try {
    const response = await axios.post(
      `${base_url}user/forgot-password-token`,
      data
    );
    if (response.data) {
      return response.data;
    } // Return data on success
  } catch (error) {
    throw new Error(error.response.data.message); // Throw error on failure
  }
};
const resetPass = async (data) => {
  try {
    const response = await axios.put(
      `${base_url}user//reset-Password/${data.token}`,
      { password: data?.password }
    );
    if (response.data) {
      return response.data;
    } // Return data on success
  } catch (error) {
    throw new Error(error.response.data.message); // Throw error on failure
  }
};

const getUsers = async () => {
  const response = await axios.get(`${base_url}user/all-User`);

  return response.data;
};
const getUserOrders = async () => {
  const response = await axios.get(`${base_url}user/getMyorders`, config);
  if (response.data) {
    return response.data;
  }
};

const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProduactFromCart,
  updateProduactFromCart,
  getUserOrders,
  createOrder,
  updateUser,
  getUsers,
  emptyCart,
  forgotPassToken,
  resetPass,
};

export default authService;
