import Link from "next/link";
import React from "react";
import './header.css'
import '../../about/page.js'
function Header() {
  return (
    <div className="header">
      <div className="container1">
        <h1>TODO</h1>
        <div className="item">
          <p className="home">Home</p>
          <Link href='/about' className="aboutlink"><p className="about">About</p></Link>

        </div>
      </div>
    </div>
  );
}

export default Header;
