import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function Faq() {
  return (
    <>
      <Meta title={"Faq"} />
      <BreadCrumb title={"Faq"} />
      <section className="policy-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h4> FAQ (Frequently Asked Questions)</h4>
                <h6>1. How do I place an order? </h6>
                To place an order, simply browse our website, select the items
                you wish to purchase, and add them to your shopping cart. Once
                you're ready to checkout, follow the prompts to enter your
                shipping and payment information to complete your purchase.
                <h6 className="title my-4">
                  {" "}
                  2. Can I cancel or modify my order after it has been placed?
                </h6>
                Once an order has been placed, it cannot be modified or
                canceled. However, if you need to make changes to your order,
                please contact us and we will do our best to accommodate your
                request.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
