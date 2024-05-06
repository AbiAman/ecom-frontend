import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import catbanner02 from "../images/catbanner-02.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  let location = useLocation();
  const { grid, data } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <>
      {Array.isArray(data) &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                location.pathname === "/product" ? `gr-${grid}` : "col-2"
              }`}
            >
              <div
                className="product-card position-relative"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              >
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => {
                      addToWish(item?._id);
                    }}
                  >
                    <img src={wish} alt="wishlist" />
                  </button>
                </div>
                <div className="product-image d-flex py-3 align-items-center justify-content-center">
                  <img
                    src={item?.images[0].url}
                    alt="productImage"
                    className="img-fluid w-auto"
                    style={{ maxWidth: "130px", maxHeight: "260px" }}
                  />
                  <img
                    src={item?.images[1].url}
                    alt="productImage"
                    className="img-fluid w-auto"
                    style={{ maxWidth: "130px", maxHeight: "260px" }}
                  />
                </div>

                <div className="product-details">
                  <h6 className="brand">{item.brand}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={parseInt(item?.totalrating)}
                    edit={false}
                  />
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                  <p className="price">{item?.price} ETB</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-10 ">
                    <button className="border-0 bg-transparent">
                      <img
                        onClick={() => navigate("/product/" + item?._id)}
                        src={view}
                        alt="view"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
