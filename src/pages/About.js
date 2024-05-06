import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

function About() {
  return (
    <>
      <Meta title={"About us"} />
      <BreadCrumb title={"About us"} />
      <section className="policy-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
