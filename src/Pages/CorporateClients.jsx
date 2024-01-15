import React from 'react';
import './CorporateClients.css'; // Ensure the CSS file is created

const CorporateClients = () => {
  return (
    <div className="corporate-clients-container">
      <div className="message-container">
        <p>We are delighted to offer our bulk order program for gym owners and corporate clients. Customize our caddy with your brand's colors and your logo.
If you're a gym owner looking to enhance your facility, fill out the form below. Once you submit your information, our sales team will contact you promptly.</p>
      </div>
      <div className="form-container">
        <form>
          <div className="form-field">
            <label htmlFor="yourName">Your Name:</label>
            <input type="text" id="yourName" name="yourName" />
          </div>
          <div className="form-field">
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-field">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CorporateClients;
