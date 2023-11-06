import React, { useState } from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';



function ServicesDropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => 
        setIsActive(!isActive)}>
        Choose One
        <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>        
      </div>

      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            <Link to="/web-design">
              <div
                onClick={(e) => {
                  setSelected("Web Design");
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                Web Design
              </div>
            </Link>
          </div>

          <div className="dropdown-item">
            <Link to="/software-development-solutions">
              <div
                onClick={(e) => {
                  setSelected("Software Development Solutions");
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                Software Development Solutions
              </div>
            </Link>
          </div>

          <div className="dropdown-item">
            <Link to="/digital-marketing">
              <div
                onClick={(e) => {
                  setSelected("Digital Marketing");
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                Digital Marketing
              </div>
            </Link>
          </div>

          <div className="dropdown-item">
            <Link to="/graphic-design">
              <div
                onClick={(e) => {
                  setSelected("Graphic Design");
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                Graphic Design
              </div>
            </Link>
          </div>

          <div className="dropdown-item">
            <Link to="/e-commerce-solutions">
              <div
                onClick={(e) => {
                  setSelected("E-Commerce Solutions");
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                E-Commerce Solutions
              </div>
            </Link>
          </div>

          <div className="dropdown-item">
            <Link to="/social-media">
              <div
                onClick={(e) => {
                  setSelected("Social Media");
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                Social Media
              </div>
            </Link>
          </div>

          <div className="dropdown-item">
            <Link to="/mobile-app">
              <div
                onClick={(e) => {
                  setSelected("Mobile App");
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                Mobile App
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;
