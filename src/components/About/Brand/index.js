import React from "react";
import LogoIcon from "../../../assets/images/LogoIcon.png";

export default function Brand() {
  return (
    <div>
      <h6>WHY <span>   <img src={LogoIcon} alt='LogoIcon'
               style={{ width: '100px', height: 'auto', marginTop: '-1rem' }} 
                 /></span>
                 </h6>
      <h1><strong>Our Brand</strong></h1>
      <br></br>
      <h5><strong>THE ORIGIN OF OUR BRAND:</strong></h5>
      <p>
        At <strong> <span></span></strong>, we believe in the power of collaboration and innovation.
        We're driven by a passion for technology and design, and we're committed
        to leveraging these strengths to create solutions that drive real impact
        for our clients. Our belief in continuous learning and staying at the
        forefront of industry trends allows us to deliver cutting-edge solutions
        that stand the test of time. We also believe in transparency, open
        communication, and building strong relationships. We see every project
        as an opportunity to not just meet expectations, but to exceed them.
        Through a combination of creativity, technical expertise, and unwavering
        dedication, we aim to bring our client's visions to life.
      </p>
    </div>
  );
}
