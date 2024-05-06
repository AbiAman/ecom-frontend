import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
function ShippingPolicy() {
  return (
    <>
      <Meta title={"Shipping Policy "} />
      <BreadCrumb title={"Shipping Policy"} />

      <section className="policy-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h4>Shipping Policy</h4>
                Thank you for shopping at Ahatk online shop! We are committed to
                providing you with a seamless and satisfactory shopping
                experience. Please review our Shipping Policy below to
                understand how shipping works with your purchases.
                <h6>Shipping Methods and Rates:</h6>
                We offer several shipping methods to meet your needs. The
                shipping options available for your order will depend on the
                items you are purchasing, your location, and the shipping method
                you select during checkout. Here are the typical shipping
                methods we offer: Standard Shipping: Our standard shipping
                option delivers your order within [X] business days after
                processing, depending on your location. Shipping rates for
                standard shipping vary based on the weight and dimensions of
                your package and your delivery address. Expedited Shipping: If
                you need your order to arrive faster, we offer expedited
                shipping options for an additional fee. Expedited shipping
                typically delivers your order within [X] business days after
                processing, depending on your location. Free Shipping: Enjoy
                free standard shipping on qualifying orders over a certain
                dollar amount. Free shipping eligibility is determined based on
                the subtotal of your order after discounts and before taxes.
                Please note that free shipping is only available for standard
                shipping within the contiguous United States. Order Processing
                Time: Orders are typically processed within [X] business days
                from the time they are placed. During peak seasons or
                promotional periods, processing times may be slightly longer.
                Once your order has been processed, you will receive a
                confirmation email with tracking information so you can monitor
                the status of your shipment.
                <h6>Shipping Restrictions:</h6>
                Please note that we currently only ship orders to addresses
                within the United States. We are unable to ship to international
                addresses, P.O. boxes, or APO/FPO addresses at this time.
                Additionally, certain items may be subject to shipping
                restrictions or regulations based on their size, weight, or
                contents. We will notify you if any such restrictions apply to
                your order.
                <h6> Shipping Delays:</h6>
                While we strive to deliver your orders in a timely manner,
                please be aware that shipping delays may occur due to unforeseen
                circumstances such as inclement weather, carrier issues, or high
                order volumes. We appreciate your patience and understanding
                during these times.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShippingPolicy;
