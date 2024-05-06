import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer"
import Header from "./Header"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout() {

  return (
    <>
      <Header/>
      <Outlet/>
      
<ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />

<Footer/>

    </>
  );
}

export default Layout;