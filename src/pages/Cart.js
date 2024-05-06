import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import watch from "../images/watch.jpg";
import empty from "../images/empty-cart.png";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";

function Cart() {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const deleteACartProduct = (cartItemId) => {
    dispatch(deleteCartProduct(cartItemId)); // Make sure cartItemId is correctly passed here
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };

  useEffect(() => {
    // Assuming cartItemId is defined somewhere in your component
    dispatch(deleteCartProduct(userCartState)); // Make sure cartItemId is correctly passed here
  }, [userCartState]); // Pass cartItemId as a dependency

  useEffect(() => {
    dispatch(
      updateCartProduct({
        cartItemId: productUpdateDetail?.cartItemId,
        quantity: productUpdateDetail?.quantity,
      })
    ); // Make sure cartItemId is correctly passed here
    setTimeout(() => {
      dispatch(getUserCart(config2));
    }, 200);
  }, [productUpdateDetail]);
  useEffect(() => {
    let sum = 0;
    if (userCartState) {
      for (let index = 0; index < userCartState.length; index++) {
        sum =
          sum +
          Number(userCartState[index].quantity) *
            Number(userCartState[index].price);
        setTotalAmount(sum);
      }
    }
  }, [userCartState]);

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  return (
    <>
      <Meta title={"Cart "} />
      <BreadCrumb title={"Cart"} />
      <section className="cart-wrapper home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            {userCartState && userCartState?.length === 0 ? (
              <div className="col-12 text-center">
                <p className="fs-4">Your cart is empty.</p>
                <img src={empty} alt="empty" width="700" height="500" />
              </div>
            ) : (
              <div>
                <div className="col-12">
                  <div className="py-3 cart-header d-flex justify-content-between align-items-center">
                    <h4 className="cart-col-1">Producr</h4>
                    <h4 className="cart-col-2">Price</h4>
                    <h4 className="cart-col-3">Quantity</h4>
                    <h4 className="cart-col-4">Total</h4>
                  </div>

                  {userCartState &&
                    userCartState?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="py-3 mb-2 cart-data d-flex justify-content-between align-items-center"
                        >
                          <div className="cart-col-1 d-flex gap-15 align-items-center">
                            <div className="w-45">
                              <img
                                src={
                                  item?.productId?.images[0].url
                                    ? item?.productId?.images[0].url
                                    : watch
                                }
                                alt="product image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="w-55">
                              <p>Title: {item?.productId?.title}</p>
                              <p className="d-flex gap-3">
                                color:
                                <ul className="colors ps-0 mb-2">
                                  <li
                                    style={{
                                      backgroundColor: item?.color?.title,
                                    }}
                                  ></li>
                                </ul>
                              </p>
                            </div>
                          </div>
                          <div className="cart-col-2 me-0">
                            <h5 className="price">{item?.price} ETB</h5>
                          </div>
                          <div className="cart-col-3 d-flex align-items-center gap-15">
                            <div>
                              <input
                                className="form-control"
                                type="Number"
                                name={"name" + item._id}
                                id={"cart" + item._id}
                                min={1}
                                max={10}
                                style={{ width: "70px" }}
                                value={item?.quantity}
                                onChange={(e) => {
                                  setProductUpdateDetail({
                                    cartItemId: item._id,
                                    quantity: e.target.value,
                                  });
                                }}
                              />
                            </div>

                            <div>
                              <AiFillDelete
                                className="text-danger fs-5"
                                onClick={() => {
                                  deleteACartProduct(item?._id);
                                }}
                              />
                            </div>
                          </div>
                          <div className="cart-col-4">
                            <h5 className="price me-0">
                              {item?.price * item.quantity} ETB
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="col-12 mt-4 py-3">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <Link to="/product" className="button">
                      Continue to Shoping
                    </Link>
                    {(totalAmount !== null || totalAmount !== 0) && (
                      <div className="d-flex flex-column align-items-end">
                        <h4>SubTotal: {totalAmount ? totalAmount : "0"} ETB</h4>
                        <p> Taxs and Shipping calculated at checkout</p>
                        <Link to="/checkout" className="button">
                          Checkout
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
