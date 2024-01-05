import React from 'react';
import './Main.css'; // Import the corresponding CSS file
import MainPageImg from '../Images/MainPageImg.jpg'; // Import the image

const Main = () => {
  return (
    <div className="main-container" style={{ backgroundImage: `url(${MainPageImg})` }}>
    </div>
  );
};

export default Main;
