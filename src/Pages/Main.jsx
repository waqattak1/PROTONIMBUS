import React from 'react';
import './Main.css';
import Footer from '../Components/Footer'; // Import the Footer component
import Image1 from '../Images/1.jpg';
import Image2 from '../Images/2.jpg';
import Image3 from '../Images/3.jpg';
import MainPageImg from '../Images/MainPageImg.jpg';

const Main = () => {
  return (
    <div>
      <div className="main-container">
        <div className="left-container">
          <img src={Image1} alt="Image 1" className="left-img" />
          <img src={Image2} alt="Image 2" className="left-img-indented" />
          <img src={Image3} alt="Image 3" className="left-img" />
        </div>
        <div className="right-container">
          <img src={MainPageImg} alt="Main Page" className="right-img" />
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Main;
