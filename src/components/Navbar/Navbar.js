import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

import "../Navbar/navbar.css";
import LogoIcon from "../../assets/images/LogoIcon.png";

export default function Nav() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className="bg-white">
      <nav
        className="bg-white "
        style={{
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
        }}
      >
        <Container fluid className="bg-white">
          <ul>
         
            <Link to="/" className="bg-white mr-auto">
              <img
                src={LogoIcon}
                alt="LogoIcon"
                style={{ width: "100px", height: "auto", marginTop: "-1rem" }}
              />
            </Link>
            
<li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Home
            </NavLink>
            </li>
            <li>
            <NavLink
              to="about"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              About
            </NavLink>
            </li>
            <li>
              <NavLink
                className="bg-white"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="/services"
              >
                Services
              </NavLink>
              </li>

              <li>
            <NavLink
              to="contact"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Contact
            </NavLink>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  );
}
