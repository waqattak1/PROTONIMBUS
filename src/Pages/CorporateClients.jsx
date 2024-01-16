import React from 'react';
import './CorporateClients.css'; // Ensure the CSS file is created
import Footer from '../Components/Footer';
import emailjs from 'emailjs-com';

const CorporateClients = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    emailjs.sendForm('service_87ljixl', 'template_f3segvt', e.target, '4dcPWdkS7Lk7JISmm')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        // You can add more actions here after successful sending, like showing a success message
      }, (error) => {
        console.log('Failed to send email:', error.text);
        // You can add more actions here in case of failure, like showing an error message
      });
  };

  return (
    <div>
      <div className="corporate-clients-container">
        <div className="message-container">
          <p>We are delighted to offer our bulk order program for gym owners and corporate clients. Customize our caddy with your brand's colors and your logo. If you're a gym owner looking to enhance your facility, fill out the form below. Once you submit your information, our sales team will contact you promptly.</p>
        </div>
        <div className="form-container">
          <form onSubmit={sendEmail}>
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
      <Footer />
    </div>
  );
};

export default CorporateClients;
