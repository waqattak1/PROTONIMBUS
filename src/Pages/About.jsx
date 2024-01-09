import React from 'react';
import './About.css';
import Footer from '../Components/Footer';
import video from '../Videos/animation.mp4';
import photo from '../Images/MainPageImg.jpg';
import newImage from '../Images/4.jpg'; // Import the new image

const About = () => {
  return (
    <div className="about-container">

      {/*Title*/}
      <div className="Title">
        <h1>Help keep the gym clean, without the hassle</h1>
      </div>

      {/* Container for side-by-side photo and video */}
      <div className="media-container">
        {/* Photo on the left */}
        <div className="photo-container">
          <img src={photo} alt="About Us" />
        </div>

        {/* Video on the right */}
        <div className="video-container">
          <video className="about-video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* New image container */}
      <div className="new-image-container">
        <img src={newImage} alt="New Image" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
