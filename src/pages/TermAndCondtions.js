import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
function TermAndCondtions() {
  return (
    <>
      <Meta title={"Term And Condtions "} />
      <BreadCrumb title={"Term And Condtions"} />

      <section className="policy-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h6> Terms and Conditions</h6>
                These Terms and Conditions govern your use of [Your Online
                Store] website and the purchase of products from our store. By
                accessing or using our website and making a purchase, you agree
                to be bound by these Terms and Conditions. Please read them
                carefully before using our website or making a purchase.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermAndCondtions;
