import React, { useState } from 'react';
import './CorporateClients.css';
import Footer from '../Components/Footer';
import emailjs from 'emailjs-com';

const CorporateClients = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [formData, setFormData] = useState({
    yourName: '',
    companyName: '',
    email: '',
    phone1: '',
    phone2: '',
    phone3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (isFormValid()) {
      emailjs.sendForm('service_87ljixl', 'template_f3segvt', e.target, '4dcPWdkS7Lk7JISmm')
        .then(
          (result) => {
            console.log('Email successfully sent!', result.text);
            setSubmissionMessage('Thank you for your inquiry! A confirmation email has been sent to the email you provided. A member of our sales team will contact you shortly.');
          },
          (error) => {
            console.log('Failed to send email:', error.text);
          }
        );
    } else {
      setSubmissionMessage('Please fill out all fields indicated by *');
    }
  };

const isFormValid = () => {
  const { yourName, companyName, email, phone1, phone2, phone3 } = formData;

  const isPhone1Valid = phone1.trim().length === 3;
  const isPhone2Valid = phone2.trim().length === 3;
  const isPhone3Valid = phone3.trim().length === 4;

  const isPhoneFieldsValid = isPhone1Valid && isPhone2Valid && isPhone3Valid;

  const isPhoneFieldsEmpty = phone1.trim() === '' && phone2.trim() === '' && phone3.trim() === '';

  return (
    yourName.trim() !== '' &&
    companyName.trim() !== '' &&
    email.trim() !== '' &&
    (isPhoneFieldsValid || isPhoneFieldsEmpty)
  );
};

  
  
  
  
  const renderLabel = (label, fieldName) => {
    const isFieldEmpty = formData[fieldName].trim() === '';
    const isValidPhoneNumber =
      fieldName === 'phone1' ? formData.phone1.trim().length === 3 :
      fieldName === 'phone2' ? formData.phone2.trim().length === 3 :
      fieldName === 'phone3' ? formData.phone3.trim().length === 4 :
      true;
  
    const isPhoneNumberField =
      fieldName === 'phone1' || fieldName === 'phone2' || fieldName === 'phone3';
  
    const shouldDisplayAsterisk = isSubmitted && (isFieldEmpty || (!isValidPhoneNumber && isPhoneNumberField));
  
    return (
      <label htmlFor={fieldName}>
        {shouldDisplayAsterisk ? <span className="required-asterisk">*</span> : null}
        {label}
        {isPhoneNumberField ? ' (e.g., 123-456-7890)' : ''}
      </label>
    );
  };
  
  return (
    <div>
      <div className="corporate-clients-container">
        <div className="message-container">
          <p>We are delighted to offer our bulk order program for gym owners and corporate clients. Customize our caddy with your brand's colors and your logo. If you're a gym owner looking to enhance your facility, fill out the form below. Once you submit your information, our sales team will contact you promptly.</p>
        </div>
        <div className="form-container">
          {submissionMessage && <div className="submission-message">{submissionMessage}</div>}
          <form onSubmit={sendEmail}>
            <div className="form-field">
              {renderLabel('Your Name', 'yourName')}
              <input type="text" id="yourName" name="yourName" value={formData.yourName} onChange={handleChange} />
            </div>
            <div className="form-field">
              {renderLabel('Company Name', 'companyName')}
              <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
            </div>
            <div className="form-field">
              {renderLabel('Email', 'email')}
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-field">
              {renderLabel('Phone Number', 'phone1')}
              <div className="phone-inputs">
                <input type="tel" id="phone1" name="phone1" maxLength="3" pattern="[0-9]{3}" value={formData.phone1} onChange={handleChange} />
                <span>-</span>
                <input type="tel" id="phone2" name="phone2" maxLength="3" pattern="[0-9]{3}" value={formData.phone2} onChange={handleChange} />
                <span>-</span>
                <input type="tel" id="phone3" name="phone3" maxLength="4" pattern="[0-9]{4}" value={formData.phone3} onChange={handleChange} />
              </div>
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
