import React from 'react';
import './Loader.css'; // Import the CSS file for custom animations

const Loader = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="loader loader1"></div>
      <div className="loader loader2"></div>
      <div className="loader loader3"></div>
    </div>
  );
};

export default Loader;
