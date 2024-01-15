import React from 'react';
import './About.css';
import Footer from '../Components/Footer';
import video from '../Videos/animation.mp4';
import photo from '../Images/MainPageImg.jpg';
import newImage from '../Images/4.jpg';

const About = () => {
  const amazonLink = "https://www.amazon.com/ProtoNiMBUS-Original-Multipurpose-Bottle-Caddy/dp/B0BNZJKHP1/ref=sr_1_1?crid=1JLRC4AGDY3RG&keywords=protonimbus%2Bgym%2Bcaddy&qid=1704830354&sprefix=protonimbus%2Bgym%2Bcaddy%2Caps%2C61&sr=8-1&th=1"; // Replace with your actual Amazon product link;

  return (
    <div className="about-container">
      <div className="Title">
        <h1>Help keep the gym clean, without the hassle</h1>
      </div>

      <div className="media-container">
        <div className="photo-container">
          <img src={photo} alt="About Us" />
        </div>
        <div className="video-container">
          <video className="about-video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="image-and-order-container">
        <div className="new-image-container">
          <img src={newImage} alt="New Image" />
        </div>
        <div className="order-button-container">
          <a href={amazonLink} target="_blank" rel="noopener noreferrer">
            <button className="order-button">Order Now</button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
