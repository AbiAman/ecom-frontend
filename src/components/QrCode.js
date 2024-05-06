import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function QrCode() {
  const [qrCodeData, setQrCodeData] = useState(window.location.href); // Initialize with current URL
  const [qrCodeImage, setQrCodeImage] = useState("");
  const UserState = useSelector((state) => state?.auth?.user);

  const generateQRCode = () => {
    const userData = `${UserState.firstname} ${UserState.lastname}, ${UserState.email}, ${UserState.mobile}`;
    QRCode.toDataURL(userData, { width: 300, margin: 2 }, (err, url) => {
      if (err) return console.error("Failed to generate QR code");
      setQrCodeImage(url);
    });
  };

  useEffect(() => {
    generateQRCode(); // Generate QR code when component mounts
  }, []); // Empty dependency array ensures it runs only once when component mounts

  return (
    <div>
      <h3>Thank you for shopping with us</h3>
      <p>
        Here's your QR code. The delivery will arrive as soon as possible. Do
        not lose it.
      </p>
      {/*   <div className="hiden">
        <input
          type="text"
          value={qrCodeData}
          onChange={(e) => setQrCodeData(e.target.value)}
          placeholder="Data to encode"
        />
        <button onClick={generateQRCode}>Generate</button>
      </div>*/}
      {qrCodeImage && (
        <div className="qrcode-container">
          <img src={qrCodeImage} alt="QR code" />
          <Link to={qrCodeImage} download="qrcode.png">
            Download
          </Link>
        </div>
      )}
    </div>
  );
}

export default QrCode;
