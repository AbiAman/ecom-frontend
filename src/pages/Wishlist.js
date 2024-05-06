import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import empty from "../images/empty-wishlist.png";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";
function Wishlist() {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector(
    (state) => state.auth.wishlist?.wishlist || []
  );

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  return (
    <>
      <Meta title={"Wishlist "} />
      <BreadCrumb title={"Wishlist"} />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {wishlistState && wishlistState.length === 0 ? (
              <div className="col-12 text-center">
                <img src={empty} alt="empty" width="600" height="400" />
              </div>
            ) : (
              wishlistState &&
              wishlistState.map((item, index) => (
                <div className="col-3" key={index}>
                  <div className="wishlist-card position-relative">
                    <img
                      onClick={() => {
                        removeFromWishlist(item?._id);
                      }}
                      src="images/cross.svg"
                      alt="cross"
                      className="position-absolute cross img-fluid"
                    />
                    <div className="wishlist-card-image bg-white p-1">
                      <img
                        src={
                          item?.images[0].url
                            ? item?.images[0].url
                            : "images/watch.jpg"
                        }
                        alt="product"
                        className="img-fluid w-100 d-block mx-auto rounded-2"
                        width={160}
                      />
                    </div>
                    <div className="py-3 px-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price">{item?.price} ETB</h6>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Wishlist;
