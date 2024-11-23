import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left"><img src="./brand.png" alt="Hop Café" /></div>
          <div className="right">
            <p>Englishpura, Sehore</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Happy Soni</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By Hop Café.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;