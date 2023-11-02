import React from "react";
import { motion } from "framer-motion";

import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import Brand from "../../components/About/Brand/index";
import Culture from "../../components/About/Culture/index";
import CustomerService from "../../components/About/CustomerService/index";
import LogoIcon from "../../assets/images/LogoIcon.png";


export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
    
      <br></br>
      <Container>
      <h1  style={{fontFamily:'Great Vibes', color:'#BF6A6A',fontSize:"4rem"}}>WHO WE ARE</h1>
      <br></br>
      <p>"YOUR PARTNER IN IT SUCCESS AND INNOVATION"</p>
     
        <strong><span>   <img src={LogoIcon} alt='LogoIcon' 
               style={{ width: '100px', height: 'auto', marginTop: '-1rem' }} 
                 /></span></strong>
      
      <p>
        "A Passionate Team Dedicated To Empowering Businesses Through harnessing
        the power of cutting-edge tools and frameworks to breathe life into
        innovative concepts. Our expertise spans the spectrum, from creating
        immersive user interfaces to engineering robust, secure backend
        solutions. We are driven by a commitment to provide users with seamless
        experiences while maximizing system performance. Our forte lies in
        transforming intricate challenges into refined, elegant solutions."
      </p>
      <br></br>
      <p>"WHERE DEVELOPMENT MEETS DESIGN"</p>
      <h1  style={{fontFamily:'Great Vibes', color:'#BF6A6A'}}>
        <strong>What we do</strong>
      </h1>
      <p>
        Strenthen your online presence with our development expertise. Whether
        it's crafting intuitive front-end interfaces or building robust back-end
        systems, we're equipped to handle it all. From full-stack development to
        specialized app creation, our team is proficient in turning your ideas
        into functional, user-friendly applications.
      </p>


      <br></br>

      <Brand />
      <br></br>

      <Culture />
      <br></br>

      <CustomerService />
      <br></br>
      </Container>
      <br></br>
      <motion.div whileHover={{ scale: 0.95 }}>
      <Container className="text-center bg-secondary-subtle p-4"
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 2px 2px 4px 4px",
                }}
                >
           <br></br>         
        <h3 style={{color:'#BF6A6A'}}>"Ready to Propel Your Business Forward?"</h3>
      <MDBBtn color="secondary">CONTACT US</MDBBtn>
      </Container>
      </motion.div>
    </motion.div>
  );
}
