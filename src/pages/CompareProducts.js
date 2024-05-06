import React from "react";

import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Colors from "../components/Colors";
function CompareProducts() {
  return (
    <>
      <Meta title={"Compare Products "} />
      <BreadCrumb title={"Compare Products"} />
      <div className="compare-products-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
        
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-cart-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Smart watch hh dgkkj hhh Smart watch hh dgkkj hhh
                  </h5>
                  <h6 className="price mb-4">100 ETB</h6>
                  <div>
                    <div className="product-detail">
                      <h5 className="title">Brand:</h5>
                      <p className="mb-2">Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="title">Type:</h5>
                      <p className="mb-2">watch</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="title">Availabilty:</h5>
                      <p className="mb-2">In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="title">Color:</h5>
                      <Colors  />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10 mt-3">
                        <p>M</p>
                        <p>S</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProducts;
