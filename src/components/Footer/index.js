import React from 'react';

import LogoIcon from "../../assets/images/LogoIcon.png"

export default function Footer() {
    return(
<div className='bg-dark text-white'>

{/* Footer */}
<footer class="text-center text-lg-start bg-light text-muted">
  {/* Section: Social media */}
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}

    {/* Right */}
    <div>
      <a href="https//:github@carolwargo.com" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https//:github@carolwargo.com" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https//:github@carolwargo.com" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="https//:github@carolwargo.com" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https//:github@carolwargo.com" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https//:github@carolwargo.com" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}

  {/* Section: Links  */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div class="row mt-3">
        {/* Grid column */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 class="text-uppercase fw-bold mb-4">
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
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 class="text-uppercase fw-bold mb-4">
            Design Elements
          </h6>
          <p> 
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap Footer</a>
          </p>
          <p>
          <a class="text-reset fw-bold" href="https://icons8.com/">Icons8 Icons </a>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Huntingtown, MD 20639, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            carolwargo.dev@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 443-771-1726</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}

  {/* Copyright */}
<div class="text-center align-items-center p-4" 
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