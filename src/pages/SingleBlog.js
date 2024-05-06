import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAblog } from "../features/blogs/blogSlice";

function SingleBlog() {
  const dispatch = useDispatch();
const location = useLocation();
const getBlogId = location.pathname.split("/")[2];
  const blogState = useSelector((state) => state?.blog?.singleBlog);

  useEffect(() => {
    getblog();
  }, []);

  const getblog = () => {
    dispatch(getAblog(getBlogId));
  };
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className="d-flex align-items-center gap-10" to="/blog">
                  <HiOutlineArrowLeft className="fs-3 gap-10" />
                  Go to blogs
                </Link>

                <h3 className="title">{blogState?.title} </h3>
                <img
                 src={blogState?.images[0].url ? blogState.images[0].url : blog}

                  alt="blog"
                  className="img-fluid w-100 my-4 rounded-5 "
                />
       <p className="desc" dangerouslySetInnerHTML={{ __html: blogState?.description }}></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
