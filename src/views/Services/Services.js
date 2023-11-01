import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Services() {
  const services = [
    "Web Design",
    "Software Development Solutions",
    "Digital Marketing",
    "Graphic Design",
    "E-Commerce Solutions",
    "Social Media",
    "Mobile App"
  ];

  const [selected, setSelected] = useState("Choose One");
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
          {selected || "Choose One"} {/* Display selected or "Choose One" */}
          <span><i className="fa fa-caret-down" aria-hidden="true"></i></span>        
        </div>
        
        {isActive && (
          <div className="dropdown-content">
            {services.map((service, index) => (
              <div className="dropdown-item" key={index}>
                <Link to={`/${service.toLowerCase().replace(/ /g, "-")}`}>
                <div
                    onClick={() => {
                      setSelected(service);
                      setIsActive(false);
                    }}
                    className="dropdown-item"
                  >
                    {service}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
