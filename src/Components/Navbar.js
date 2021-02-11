import React, { useState, useEffect } from "react";
import "../Stylesheets/Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className='nav__contents'>
        <img
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
          className='nav__logo'
        />
        <img
          src='https://www.whats-on-netflix.com/wp-content/uploads/2019/04/avatar-the-last-airbender-original-animated-series.jpg'
          alt=''
          className='nav__avatar'
        />
      </div>
    </div>
  );
};

export default Navbar;
