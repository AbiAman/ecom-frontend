import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllblogs } from "../features/blogs/blogSlice";
import moment from "moment";

function Blogs() {
  const dispatch = useDispatch();

  const blogState = useSelector((state) => state?.blog?.blog);

  useEffect(() => {
    getblogs();
  }, []);

  const getblogs = () => {
    dispatch(getAllblogs());
  };

  return (
    <>
      <Meta title={"Blogs "} />
      <BreadCrumb title={"Blogs"} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                {blogState &&
                  blogState?.map((item, index) => {
                    return (
                      <div className="col-md-6 col-lg-4 mb-3" key={index}>
                        <BlogCard
                          id={item?._id}
                          title={item?.title}
                          description={item?.description}
                          image={item?.images[0]?.url}
                          date={moment(item?.createdAt).format(
                            "MMM Do YYYY, h:mm a"
                          )}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
