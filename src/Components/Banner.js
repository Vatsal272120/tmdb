import React from "react";
import "../Stylesheets/Banner.css";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center", // makes sure the image stays in center
      }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>Add to My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate("test test test ", 150)}
        </h1>
      </div>
      <div className='banner--fadebottom' />
    </header>
  );
};

export default Banner;
