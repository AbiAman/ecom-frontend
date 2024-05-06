import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
function PrivacyPolice() {
  return (
    <>
      <Meta title={"Privacy Policy "} />
      <BreadCrumb title={"Privacy Policy"} />
      <section className="policy-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <h4 className="text-bold"> Privacy Policy</h4>
                AHATK operates the ahatk website application, which provides an
                online platform for purchasing goods and services. This page
                informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our service and the
                choices you have associated with that data. Information
                Collection and Use We collect several different types of
                information for various purposes to provide and improve our
                service to you.
                <h6 className="text-bold">Types of Data Collected</h6>
                Personal Data: While using our service, we may ask you to
                provide us with certain personally identifiable information that
                can be used to contact or identify you ("Personal Data").
                Personally identifiable information may include, but is not
                limited to: Email address First name and last name Phone number
                Address, State,City and Usage Data Use of Data
                <h6 className="text-bold">
                  We use the collected data for various purposes:
                </h6>
                To provide and maintain our service To notify you about changes
                to our service To allow you to participate in interactive
                features of our service when you choose to do so To provide
                customer support To gather analysis or valuable information so
                that we can improve our service To monitor the usage of our
                service To detect, prevent and address technical issues Transfer
                of Data Your information, including Personal Data, may be
                transferred to — and maintained on — computers located outside
                of your state, province, country, or other governmental
                jurisdiction where the data protection laws may differ from
                those of your jurisdiction.
                <h6 className="text-bold">Disclosure of Data</h6>
                We may disclose your Personal Data in the good faith belief that
                such action is necessary to: To comply with a legal obligation
                To protect and defend the rights or property of [Your Company
                Name] To prevent or investigate possible wrongdoing in
                connection with the service To protect the personal safety of
                users of the service or the public To protect against legal
                liability
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolice;
