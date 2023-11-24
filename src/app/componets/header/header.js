import React from "react";
import './header.css'
function Header() {
  return (
    <div className="header">
      <div className="container1">
        <h1>TODO</h1>
        <div className="item">
          <p className="home">Home</p>
          <p className="about">About</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
