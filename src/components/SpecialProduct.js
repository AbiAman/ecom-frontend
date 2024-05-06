import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
function SpecialProduct(props) {
  const { title, brand, totalrating, price, quantity, sold, image, id } = props;
  return (
    <div className="col-lg-6 col-5 col-md-5 mb-3">
      <div className="special-product-card">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="mb-2 mb-md-0">
            <img src={image} alt="watch" className="img-fluid" />
          </div>
          <div className="special-product-content p-2 w-full">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={totalrating}
              edit={false}
            />
            <p className="price">
              <span className="red-p">{price}</span> &nbsp; 2% Discount
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>For 5 Days</b>
              </p>
            </div>

            <div className="prod-count my-3">
              <p> Product: {quantity}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: quantity / quantity + sold * 100 }}
                  aria-valuenow={quantity / quantity + sold * 100}
                  aria-valuemin={quantity}
                  aria-valuemax={sold + quantity}
                ></div>
              </div>
            </div>

            <Link className="button" to={"/product/" + id}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
