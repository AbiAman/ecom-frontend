import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import SingleBlog from "./pages/SingleBlog";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PrivacyPolice from "./pages/PrivacyPolice";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndCondtions from "./pages/TermAndCondtions";
import { PrivateRoutes } from "./routing/PrivateRouter";
import { OpenRoutes } from "./routing/OpenRouter";
import Orders from "./pages/Orders";
import PaymentInfo from "./pages/PaymentInfo";
import Profile from "./pages/Profile";
import SellerPro from "./pages/SellerPro";
import SellerReg from "./pages/SellerReg";
import Slogin from "./pages/Slogin";
import ProductCategory from "./components/ProductCategory";
import QrCodePage from "./pages/QrCodePage";
import Faq from "./pages/Faq";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route
              path="compare-product"
              element={
                <PrivateRoutes>
                  <CompareProducts />
                </PrivateRoutes>
              }
            />
            <Route
              path="wishlist"
              element={
                <PrivateRoutes>
                  <Wishlist />
                </PrivateRoutes>
              }
            />
            <Route
              path="my-profile"
              element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              }
            />
            <Route
              path="login"
              element={
                <OpenRoutes>
                  <Login />
                </OpenRoutes>
              }
            />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
            <Route
              path="signup"
              element={
                <OpenRoutes>
                  <SignUp />{" "}
                </OpenRoutes>
              }
            />
            <Route
              path="cart"
              element={
                <PrivateRoutes>
                  <Cart />
                </PrivateRoutes>
              }
            />
            <Route
              path="my-orders"
              element={
                <PrivateRoutes>
                  <Orders />
                </PrivateRoutes>
              }
            />
            <Route
              path="checkout"
              element={
                <PrivateRoutes>
                  <Checkout />
                </PrivateRoutes>
              }
            />
            <Route
              path="Payment-info"
              element={
                <PrivateRoutes>
                  <PaymentInfo />
                </PrivateRoutes>
              }
            />
            <Route
              path="seller"
              element={
                <PrivateRoutes>
                  <SellerPro />
                </PrivateRoutes>
              }
            />
            <Route path="privacy-policy" element={<PrivacyPolice />} />
            <Route path="qr-code" element={<QrCodePage />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-condition" element={<TermAndCondtions />} />
            <Route path="faq" element={<Faq />} />
            <Route path="seller-reg" element={<SellerReg />} />
            <Route path="seller-login" element={<Slogin />} />
            <Route path="product-category" element={<ProductCategory />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
