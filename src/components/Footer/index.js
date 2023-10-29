import React from 'react';

import LogoIcon from "../../assets/images/LogoIcon.png"

export default function Footer() {
    return(
<div className='bg-dark text-white'>

{/* Footer */}
<footer className="text-center text-lg-start bg-light text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}

    {/* Right */}
    <div>
      <a href="https//:github@carolwargo.com" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https//:github@carolwargo.com" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https//:github@carolwargo.com" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="https//:github@carolwargo.com" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https//:github@carolwargo.com" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https//:github@carolwargo.com" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}

  {/* Section: Links  */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
          <img src={LogoIcon} alt="LogoIcon" 
        style={{
            height:"auto", 
            width:"45%",
            }}/>
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Design Elements
          </h6>
          <p> 
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap Footer</a>
          </p>
          <p>
          <a className="text-reset fw-bold" href="https://icons8.com/">Icons8 Icons </a>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Huntingtown, MD 20639, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            carolwargo.dev@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 443-771-1726</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}

  {/* Copyright */}
<div className="text-center align-items-center p-4" 
            style= {{
                    backgroundColor:"rgba(0, 0, 0, 0.05)",
            }}
            >
    © 2023 Copyright: <span><b>   <img src={LogoIcon} alt="LogoIcon" 
        style={{
            height:"auto", 
            width:"10%",
            }}/>
            </b>
            </span>
    
</div>
  {/* Copyright */}
</footer>
{/* Footer */}

</div>

    )
}