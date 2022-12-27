import React from "react";
import "./banner.styles.scss";
const Banner = () => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage:
          "url('https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate("this a test this a test", 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
