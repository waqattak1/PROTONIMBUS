import React from 'react';
import './About.css'; // Make sure to create a corresponding About.css file
import Footer from '../Components/Footer'; // Assuming you use the same Footer component
import video from '../Videos/animation.mp4'; // Import the video
import photo from '../Images/MainPageImg.jpg';

const About = () => {
  return (
    <div className="about-container">
      {/* Photo on the left */}
      <div className="photo-container">
        <img src={photo} alt="About Us" /> {/* Display the imported photo */}
      </div>

      {/* Video on the right */}
      <div className="video-container">
        <video className="about-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;