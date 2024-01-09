import React from 'react';
import './Order.css'; // CSS file for styling


const Order = () => {
  const amazonLink = "https://www.amazon.com/ProtoNiMBUS-Original-Multipurpose-Bottle-Caddy/dp/B0BNZJKHP1/ref=sr_1_1?crid=1JLRC4AGDY3RG&keywords=protonimbus%2Bgym%2Bcaddy&qid=1704830354&sprefix=protonimbus%2Bgym%2Bcaddy%2Caps%2C61&sr=8-1&th=1"; // Replace with your actual Amazon product link

  return (
    <div className="order-container">
      <div className="order-button-container">
        <a href={amazonLink} target="_blank" rel="noopener noreferrer">
          <button className="order-button">Order Now</button>
        </a>
      </div>
    </div>
  );
};

export default Order;
