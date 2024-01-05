import React from 'react';
import './About.css'; // Make sure to create a corresponding About.css file
import Footer from '../Components/Footer'; // Assuming you use the same Footer component
import video from '../Videos/animation.mp4'; // Import the video

const About = () => {
  return (
    <div className="about-container">
      {/* Video at the top */}
      <div className="video-container">
        <video className="about-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content of the About Page */}
      <div className="about-content">
        {/* Add your about page content here */}
        <h1>About Us</h1>
        <p>Welcome to our About Page. Here is some information about us...</p>
        {/* More content */}
      </div>

      <Footer />
    </div>
  );
};

export default About;
