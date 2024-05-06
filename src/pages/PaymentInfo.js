import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import CustomInput from "../components/CustomInput";
import Pay from "../components/Pay";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

function PaymentInfo() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);

  const tx_ref = `${uuidv4()}-tx-${Math.floor(
    100000 + Math.random() * 900000
  )}`;
  //const tx_ref = `tx-1234`;
  const public_key = "CHAPUBK_TEST-rHewa3Uqcu6jpFl4ZhAuq6yr3lFCMJCw";
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  useEffect(() => {
    let sum = 0;
    if (cartState) {
      for (let index = 0; index < cartState.length; index++) {
        sum +=
          Number(cartState[index].quantity) * Number(cartState[index].price);
        setTotalAmount(sum);
      }
    }
  }, [cartState]);
  const UserState = useSelector((state) => state?.auth?.user);
  const handlePayment = () => {
    // Process the payment
    const tx_ref = `${uuidv4()}-tx-${Math.floor(
      100000 + Math.random() * 900000
    )}`;
    // Do something with fname, lname, email, mobile, totalAmount, and tx_ref
    alert(
      `First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nMobile: ${mobile}\nTotal Amount: ${totalAmount}\nTransaction Reference: ${tx_ref}`
    );
  };

  return (
    <>
      <Meta title={"Checkout "} />
      <div className="checkout-wrapper py-5 bg-white">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-7 bg-white p-5 ">
              <div className="checkout-left-data ">
                <h3 className="website-name">AHATK SHOP.</h3>

                <nav
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark" to="/cart">
                        Cart
                      </Link>
                    </li>
                    &nbsp;
                    <li
                      className="breadcrumb-item active text-dark"
                      aria-current="page"
                    >
                      Information
                    </li>
                    &nbsp;
                    <li
                      className="breadcrumb-item active text-dark "
                      aria-current="page"
                    >
                      Shipping
                    </li>
                    &nbsp;
                    <li
                      className="breadcrumb-item active text-dark "
                      aria-current="page"
                    >
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-detail total">Aman (aman@gmail.com)</p>
                <h4 className="title mb-3">Payment Information </h4>
                <label htmlFor="exampleInputmobil" className="form-label">
                  First Name
                </label>
                <CustomInput
                  type="text"
                  name="firstname"
                  disabled
                  onChng={(e) => setFname(e.target.value)}
                  val={UserState?.firstname}
                />
                <label htmlFor="exampleInputmobil" className="form-label">
                  Last Name
                </label>
                <CustomInput
                  type="text"
                  name="lastname"
                  disabled
                  onChng={(e) => setLname(e.target.value)}
                  val={UserState?.lastname}
                />
                <label htmlFor="exampleInputmobil" className="form-label">
                  Email
                </label>
                <CustomInput
                  type="email"
                  name="email"
                  disabled
                  onChng={(e) => setEmail(e.target.value)}
                  val={UserState?.email}
                />
                <label htmlFor="exampleInputmobil" className="form-label">
                  Mobile No
                </label>
                <CustomInput
                  type="number"
                  name="mobile"
                  disabled
                  onChng={(e) => setMobile(e.target.value)}
                  required
                  val={UserState?.mobile}
                />
                <label htmlFor="exampleInputmobil" className="form-label">
                  Total Amount
                </label>
                <CustomInput
                  disabled
                  type="number"
                  name="amount"
                  onChng={(e) => setMobile(e.target.value)}
                  required
                  val={totalAmount ? totalAmount + 200 : "0"}
                />

                <Pay
                  fname={UserState?.firstname}
                  lname={UserState?.lastname}
                  email={UserState?.email}
                  mobile={UserState?.mobile}
                  disabled
                  amount={totalAmount ? totalAmount + 200 : "0"}
                  tx_ref={tx_ref}
                  public_key={public_key}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentInfo;
