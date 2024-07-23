import React from 'react';
import Navbar from './Navbar';
import Top_function from './Top_function';
import Slide from './Slide';

const Header = () => {
  return (
    <div className="header">
      <Top_function/>
      <hr />
      {/* Navbar Component */}
      <Navbar/>
      {/* Slider Component */}
    </div>
  );
}

export default Header;
