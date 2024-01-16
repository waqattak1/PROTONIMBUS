import React, { useState } from 'react';
import './CorporateClients.css';
import Footer from '../Components/Footer';
import emailjs from 'emailjs-com';

const CorporateClients = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    emailjs.sendForm('service_87ljixl', 'template_f3segvt', e.target, '4dcPWdkS7Lk7JISmm')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSubmissionMessage("Thank you for your inquiry! A confirmation email has been sent to the email you provided. A member of our sales team will contact you shortly.");
      }, (error) => {
        console.log('Failed to send email:', error.text);
        setIsSubmitted(false); // Optionally reset for retries
      });
  };

  return (
    <div>
      <div className="corporate-clients-container">
        <div className="message-container">
          <p>We are delighted to offer our bulk order program for gym owners and corporate clients. Customize our caddy with your brand's colors and your logo. If you are a gym owner looking to enhance your facility, fill out the form below. Once you submit your information, our sales team will contact you promptly.</p>
        </div>
        <div className="form-container">
          <form onSubmit={sendEmail}>
            <div className="form-field">
              <label htmlFor="yourName">Your Name:</label>
              <input type="text" id="yourName" name="yourName" disabled={isSubmitted} />
            </div>
            <div className="form-field">
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="companyName" name="companyName" disabled={isSubmitted} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" disabled={isSubmitted} />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" disabled={isSubmitted} />
            </div>
            <div className="form-field">
              <button type="submit" className="submit-button" disabled={isSubmitted}>Submit</button>
            </div>
          </form>
          {submissionMessage && <div className="submission-message">{submissionMessage}</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CorporateClients;
