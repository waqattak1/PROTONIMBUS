import React from 'react';
import './App.css';
import Main from './Pages/Main';
import Navbar from './Components/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Include the Navbar */}
      <Main />
    </div>
  );
}

export default App;
