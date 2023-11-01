import React from "react";
import { motion } from "framer-motion";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

import Header from "../../components/Header/Header";
import CoreIntro from "../../components/Home/CoreIntro/index";
import ServiceCarousel from '../../components/Home/ServiceCarousel/index'
import { Col, Container, Row } from "react-bootstrap";
import MeCard from "../../assets/images/MeCard.png";
import LogoIcon from "../../assets/images/LogoIcon.png";
import Facts1 from "../../assets/images/Facts1.png";
import Facts2 from "../../assets/images/Facts2.png";
import Facts3 from "../../assets/images/Facts3.png";

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
        
    <div className="home-page" id="home-page">
        
        <Header />
        <Container>
      <div className="text-center">
        <br></br>
        <h2>
          <b>UNLOCK THE FULL POTENTIAL OF YOUR BUSINESS...</b>
        </h2>
        <p>
          In today's dynamic market, businesses need more than just survival
          tactics – they need strategies that drive growth and sustainability.
          At {" "}
          <span>
            {" "}
            <img
              src={LogoIcon}
              alt="LogoIcon"
              style={{ width: "100px", height: "auto", marginTop: "-1rem" }}
            />
          </span>
           , we are committed to helping you add value to your operations. Our
          tailored solutions are designed to streamline your organization,
          eliminate redundancies, and increase your market presence.
        </p>
      </div>
      <br></br>
      <Row>
       
          <h1>
            <strong>
           {" "}
              <span>
                {" "}
                <img
                  src={LogoIcon}
                  alt="LogoIcon"
                  style={{ width: "170px", height: "auto", marginTop: "-1rem" }}
                />
              </span>
            </strong>
          </h1>
          <p>"YOUR PARTNER IN IT SUCCESS AND INNOVATION"</p>
          <p>
            <i>
            "We are a passionate team of professionals with a diverse range of backgrounds and talents. Our collective
              dedication is towards empowering businesses by leveraging the
              potential of state-of-the-art tools and frameworks, thus giving
              life to groundbreaking concepts."
            </i>
          </p>
          <br></br>
      
      </Row>
      <br></br>

      <Container>
     

<Row className="dflex justify-content-between">
<Col md={5}>
<h2 className="start" id="start" style={{color:'#7B014C'}}>
        <strong>WHERE DO WE START?</strong>
      </h2>
      <h5>Three Things To Be Explained</h5>
      <ol>
        <li>DEFINE A WELL DEVELOPED SITE</li>
        <li>ELIMINATE DOUBT</li>
        <li>ASSIST WITH NEED</li>
      </ol>
      <br></br>
      <p>1. "<u>DEFINING A WELL DEVELOPED WEBSITE</u>"</p>
      <p style={{color:"gray"}} >Efficiency-<i>"Making the most of our time & resources"</i> is crucial in any type of success, right?
A website is no different- An “EFFICIENT” site will allow you to “make the most of your time & resources”. A well developed website will quite literally replace administrative need, eliminate repetition, keep you organized, conduct analysis, and generate “passive income”. Sound too good to be true? <b>IT'S NOT</b>!
<span> <a href= "/web-design">See How</a>...</span>
</p>
<br></br>
      <p>"ELIMINATING DOUBT FOR NEED OF IT SERVICES"</p>
      <p>By Addressing Two Frequently Asked Questions By Business Owners. </p> 
      <Container className="pt-3">
       <ol>
          <li><i>Does My Business Really Need a Website?</i></li>
          <p><b>YES</b>, Every Business Needs A Website.</p>
          <li><i>Why Do I Need a Professional to Develop a Website?</i></li>
          <p>Technically You Can Do It Yourself <b>But</b>...</p>
        </ol>
        
        <p>"LET US ASSIST YOU IN DEFINING YOUR NEEDS"</p>
      <p>
        We understand that gaining clarity is a significant step towards finding
        the right solution, and We further acknowledge that narrowing down your
        requirements can be a daunting task. Our expertise lies in translating
        everyday concepts into sophisticated solutions. To simplify this
        process, we've created an easy-to-follow selection guide to help
        alleviate any confusion.
      </p>

      <h4 style={{color:'#D690AA'}}>
        <strong>Our Services Include</strong>{" "}
        <span style={{ font: "caption", color: "gray" }}>
          but are not limited too...
        </span>
      </h4>
      
        </Container>
  </Col>
  <Col md={6} className="align-items-end justify-content-end">
  <motion.div
    className="box"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  />
  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <img src={Facts1} alt="fact-pic1" style={{ width: '100%', padding:"1rem" }} />
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <img src={Facts2} alt="fact-pic2" style={{ width: '100%' , padding:"1rem"}} />
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 20}}
  >
    <img src={Facts3} alt= "fact-pic3" style={{ width: '100%', padding:"1rem" }}></img>
  </motion.div>
</Col>


</Row>
      </Container>

      <br></br>
      <br></br>
      <p>"LET US ASSIST YOU IN DEFINING YOUR NEEDS"</p>
      <p>
        We understand that gaining clarity is a significant step towards finding
        the right solution, and We further acknowledge that narrowing down your
        requirements can be a daunting task. Our expertise lies in translating
        everyday concepts into sophisticated solutions. To simplify this
        process, we've created an easy-to-follow selection guide to help
        alleviate any confusion.
      </p>

      <h4 style={{color:'#D690AA'}}>
        <strong>Our Services Include</strong>{" "}
        <span style={{ font: "caption", color: "gray" }}>
          but are not limited too...
        </span>
      </h4>
      
      <br></br>
      <br></br>
      <Row>
      <CoreIntro />
      </Row>
      <br></br>
      <br></br>
      
      
      <div className="text-center">
      <h2>
        <strong>Technology Made Simple</strong>
        </h2>
        <ServiceCarousel />
        </div>
        
      <br></br>
      <br></br>
      <Row>
        <Col>
          <motion.div whileHover={{ scale: 0.95 }}>
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage src={MeCard} fluid alt="..." />

                <a href="/">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>WE DO THE WORK</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn href="#">Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </motion.div>
        </Col>
      </Row>
      </Container>
    </div>
    </motion.div>
  );
}
