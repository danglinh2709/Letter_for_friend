// src/components/QRCodeGenerator.jsx
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const url = "https://yourwebsite.com"; // Đổi thành domain thật nếu deploy

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h3>Scan to visit this site 💌</h3>
      <QRCodeCanvas
        value={url}
        size={180}
        bgColor="#ffffff"
        fgColor="#d63384"
      />
    </div>
  );
};

export default QRCodeGenerator;
