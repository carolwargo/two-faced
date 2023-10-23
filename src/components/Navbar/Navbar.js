import React, { useState } from 'react';
import "../../App.css"

export default function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
    <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
            <a href="/" className="w3-bar-item w3-button w3-wide" rel="noopener noreferrer">LOGO</a>
            <div className="w3-right w3-hide-small">
                <button type="button" className="w3-bar-item w3-button" onClick={() => window.location.href = "#about"}>ABOUT</button>
                <button type="button" className="w3-bar-item w3-button" onClick={() => window.location.href = "#team"}><i className="fa fa-user"></i> TEAM</button>
                <button type="button" className="w3-bar-item w3-button" onClick={() => window.location.href = "#work"}><i className="fa fa-th"></i> WORK</button>
                <button type="button" className="w3-bar-item w3-button" onClick={() => window.location.href = "#pricing"}><i className="fa fa-usd"></i> PRICING</button>
                <button type="button" className="w3-bar-item w3-button" onClick={() => window.location.href = "#contact"}><i className="fa fa-envelope"></i> CONTACT</button>
            </div>
            <button type="button" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={toggleSidebar}>
                <i className="fa fa-bars"></i>
            </button>
        </div>
    </div>
    <nav className={`w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large ${sidebarVisible ? 'w3-show' : ''}`} id="mySidebar">
        <button type="button" onClick={() => {toggleSidebar(); window.location.href = "#about"}} className="w3-bar-item w3-button w3-large w3-padding-16">ABOUT</button>
        <button type="button" onClick={() => {toggleSidebar(); window.location.href = "#team"}} className="w3-bar-item w3-button">TEAM</button>
        <button type="button" onClick={() => {toggleSidebar(); window.location.href = "#work"}} className="w3-bar-item w3-button">WORK</button>
        <button type="button" onClick={() => {toggleSidebar(); window.location.href = "#pricing"}} className="w3-bar-item w3-button">PRICING</button>
        <button type="button" onClick={() => {toggleSidebar(); window.location.href = "#contact"}} className="w3-bar-item w3-button">CONTACT</button>
    </nav>
    </div>
  );
}
