import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";
import moment from "moment";

function Orders() {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getOrderProduct?.orders
  );
  console.log(orderState);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <>
      <BreadCrumb title="My Orders" />
      <Meta title={"My Orders"} />
      <Container className="policy-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">     


              {orderState &&  orderState.length === 0? ( <div className="col-12 text-center">
              <p className="fs-4">Your order list is empty.</p>
            </div>):  
               orderState && orderState?.map((item, index) => {
                  return (
    
                    
                    <div
                      className="col-12 mt-3 "
                      key={index}
                      
                    > 
                      <div className="row p-3" style={{ backgroundColor: "#febd69" }}>
                <div className="col-3">
                  <h5>Order Id</h5>
                </div>
                <div className="col-3">
                  <h5>Total Amount</h5>
                </div>
    
                <div className="col-3">
                  <h5>Status</h5>
                </div>
                <div className="col-3">
                  <h5>Ordered At</h5>
                </div>
              </div>
                      <div className="row">
                        <div className="col-3">
                          <p>{item?._id}</p>
                        </div>
                        <div className="col-3">
                          <p>{item?.totalPrice}</p>
                        </div>
    
                        <div className="col-3">
                          <p>{item?.orderStatus}</p>
                        </div>
                        <div className="col-3">
                          <p>{moment(item?.createdAt).format("MMM Do YYYY, h:mm a")}</p>
                        </div>
                      </div>
    
                      <div className="col-12  ">
                        <div
                          className="row  p-3"
                          style={{ backgroundColor: "#febd69" }}
                        >
                          <div className="col-3">
                            <h5>Product Name</h5>
                          </div>
                          <div className="col-3">
                            <h5>Quantity</h5>
                          </div>
    
                          <div className="col-3">
                            <h5>Price</h5>
                          </div>
                          <div className="col-3">
                            <h5>Color</h5>
                          </div>
                        </div>
    
                      
                          {item.orderItems?.map((i, index) => {
                            return (
                              <div className="col-12 p-2 " key={index}>
                              <div className="row  py-2">
                                <div className="col-3">
                                  <p>{i?.product?.title}</p>
                                </div>
                                <div className="col-3">
                                  <p>{i?.quantity}</p>
                                </div>
    
                                <div className="col-3">
                                  <p>{i?.price}</p>
                                </div>
                                <div className="col-3">
                                  <ul className="colors ps-0 mb-2">
                                    <li style={{ backgroundColor: i?.color }}></li>
                                  </ul>
                                </div>
                              </div>
                              </div>
                            );
                          })}
                        
                      </div>
                    </div>
                  );
                })}
            

        
        </div>
      </Container>
    </>
  );
}

export default Orders;
