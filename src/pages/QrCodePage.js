import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import QrCode from "../components/QrCode";
function QrCodePage() {
  return (
    <>
      <Meta title={"Qr code "} />
      <BreadCrumb title={"Qr code "} />

      <section className="policy-wrapper home-wrapper-2 py-4 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <QrCode />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QrCodePage;
