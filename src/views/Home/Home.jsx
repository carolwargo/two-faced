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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { Col, Container, Row } from "react-bootstrap";
import MeCard from "../../assets/images/MeCard.png";
import LogoIcon from "../../assets/images/LogoIcon.png";
import Facts1 from "../../assets/images/Facts1.png";
import Facts2 from "../../assets/images/Facts2.png";
import Facts3 from "../../assets/images/Facts3.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="p-2">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <div className="home-page" id="home-page">
          <Container className="text-center">
            <br></br>
            <br></br>
            <Row>
              <h2>
                <b style={{ fontFamily: "Great Vibes", color: "#BF6A6A" }}>
                  UNLOCK THE FULL POTENTIAL OF YOUR BUSINESS...
                </b>
              </h2>
              <p>
                In today's dynamic market, businesses need more than just
                survival tactics – they need strategies that drive growth and
                sustainability. At{" "}
                <span>
                  {" "}
                  <img
                    src={LogoIcon}
                    alt="LogoIcon"
                    style={{
                      width: "100px",
                      height: "auto",
                      marginTop: "-1rem",
                    }}
                  />
                </span>
                , we are committed to helping you add value to your operations.
                Our tailored solutions are designed to streamline your
                organization, eliminate redundancies, and increase your market
                presence.
              </p>
            </Row>
          </Container>
          <br></br>
          <br></br>
          <Container>
            <Row>
              
            <p style={{ color: "gray" }}>
                      We understand that gaining clarity is a significant step
                      towards finding the right solution, and We further
                      acknowledge that narrowing down your requirements can be a
                      daunting task. Our expertise lies in translating everyday
                      concepts into sophisticated solutions. To simplify this
                      process, we've created a "Service Gallery" to help. Click to Explore...
                    </p>

                    <h4 style={{ color: "#BF6A6A" }}>
                      <strong>Our Services Include</strong>{" "}
                      <span style={{ font: "caption", color: "gray" }}>
                        but are not limited too...
                      </span>
                    </h4>

               {/* CORE INTRO SERVICES GALLERY IMPORT */}     
              <CoreIntro />
            </Row>
            <br></br>
            <br></br>
            <br></br>
          </Container>


          {/* TECHNOLOGY 3 BUTTON */}
          <div
            className="text-center "
            style={{
              
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              padding: "1rem",
            }}
          >
            <h2
              className="text-center"
              style={{ color: "#BF6A6A", fontFamily: "Great Vibes" }}
            >
              TECHNOLOGY MADE SIMPLE
            </h2>
            <Row className="d-flex justify-content-between ">
              <Col md={4} style={{ padding: "1rem" }}>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <button
                    className="services btn btn-secondary pt-3 pb-3"
                    style={{
                      fontSize: "1.25rem",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Example shadow: 0 offset, 4px blur, 8px spread, 10% opacity
                      textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "#BF6A6A",
                      color: "white",
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                    }}
                  >
<FontAwesomeIcon icon={faComments} size="1x" />
                    &nbsp;  
                    <b>CONSULTING SERVICES</b>
                  </button>
                </motion.div>
              </Col>
              <Col md={4} style={{ padding: "1rem" }}>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <button
                    className="services btn btn-secondary pt-3 pb-3 "
                    style={{
                      fontSize: "1.25rem",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Example shadow: 0 offset, 4px blur, 8px spread, 10% opacity
                      textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "#BF6A6A",
                      color: "white",
                      paddingRight: "2rem",
                      paddingLeft: "2rem",
                    }}
                  >
                   
                    <FontAwesomeIcon icon={faTicket} size="1x" />
                    &nbsp;
                    <span>
                     <b>SUPPORT SERVICES</b>
                    </span>
                  </button>
                </motion.div>
              </Col>
              <Col md={4} style={{ padding: "1rem" }}>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <button
                    className="services btn btn-secondary pt-3 pb-3"
                    style={{
                      fontSize: "1.25rem",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Example shadow: 0 offset, 4px blur, 8px spread, 10% opacity
                      textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "#BF6A6A",
                      color: "white",
                      paddingRight: "1.75rem",
                      paddingLeft: "1.75rem",
                    }}
                  >
                    <FontAwesomeIcon icon={faLightbulb} size="1x" />
                  &nbsp;
                    <b>TRAINING SERVICES</b>
                  </button>
                </motion.div>
              </Col>
            </Row>
          </div>

          <br></br>
          <br></br>
          <br></br>

          <Container>
            <Row>
              <h1 style={{ fontFamily: "Great Vibes", color: "#BF6A6A" }}>
                <strong>
                  {" "}
                  <span>
                    {" "}
                    <img
                      src={LogoIcon}
                      alt="LogoIcon"
                      style={{
                        width: "170px",
                        height: "auto",
                        marginTop: "-1rem",
                      }}
                    />
                  </span>
                </strong>
              </h1>
              <p>"YOUR PARTNER IN IT SUCCESS AND INNOVATION"</p>
              <p>
                <i>
                  "We are a passionate team of professionals with a diverse
                  range of backgrounds and talents. Our collective dedication is
                  towards empowering businesses by leveraging the potential of
                  state-of-the-art tools and frameworks, thus giving life to
                  groundbreaking concepts."
                </i>
              </p>
              <br></br>
            </Row>
            <br></br>

            <Container>
              <Row className="dflex justify-content-between">
                <Col md={6}>
                  <h2 className="start" id="start" style={{ color: "#BF6A6A" }}>
                    <strong>WHERE DO WE START?</strong>
                  </h2>
                  <h5>Three Things To Be Explained</h5>
                  <ol>
                    <li>DEFINE A WELL DEVELOPED SITE</li>
                    <li>ELIMINATE DOUBT</li>
                    <li>ASSIST WITH NEED</li>
                  </ol>
                  <br></br>
                  <Container>
                  <p>
                    1. "<u>DEFINING A WELL DEVELOPED WEBSITE</u>"
                  </p>
                  <p style={{ color: "gray" }}>
                    Efficiency-<i>"Making the most of our time & resources"</i>{" "}
                    is crucial in any type of success, right? A website is no
                    different- An “EFFICIENT” site will allow you to “make the
                    most of your time & resources”. A well developed website
                    will quite literally replace administrative need, eliminate
                    repetition, keep you organized, conduct analysis, and
                    generate “passive income”. Sound too good to be true?{" "}
                    <b>IT'S NOT</b>!
                  </p>
                  <br></br>
                  <p>
                    2. "<u>ELIMINATING DOUBT FOR NEED OF IT SERVICES</u>"
                  <br></br>
                    By Addressing Two Frequently Asked Questions By Business
                    Owners.</p>
                  <Container className="pt-3" style={{color:'gray'}}>
                    <ol>
                      <li>
                        <i>Does My Business Really Need a Website?</i>
                      </li>
                      <p>
                        <b>YES</b>, Every Business Needs A Website.
                      </p>
                      <li>
                        <i>
                          Why Do I Need a Professional to Develop a Website?
                        </i>
                      </li>
                      <p>
                        Technically You Can Do It Yourself <b>But</b>...
                      </p>
                    </ol>
                  </Container>
                    <p>
                      3. "<u>LET US ASSIST YOU IN DEFINING YOUR NEEDS</u>"
                    </p>

                  </Container>
                </Col>


        {/* STAT CARDS */}        
                <Col md={6} className="align-items-end justify-content-end">
                  <h4 style={{textAlign:'center',color: "#BF6A6A"}}>STATISTICAL INSIGHT</h4>
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <img
                      src={Facts1}
                      alt="fact-pic1"
                      style={{ width: "100%", padding: "1rem" }}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <img
                      src={Facts2}
                      alt="fact-pic2"
                      style={{ width: "100%", padding: "1rem" }}
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <img
                      src={Facts3}
                      alt="fact-pic3"
                      style={{ width: "100%", padding: "1rem" }}
                    ></img>
                  </motion.div>
                </Col>
              </Row>
            </Container>

            <br></br>
            <br></br>
            <p>"LET US ASSIST YOU IN DEFINING YOUR NEEDS"</p>
            <p>
              We understand that gaining clarity is a significant step towards
              finding the right solution, and We further acknowledge that
              narrowing down your requirements can be a daunting task. Our
              expertise lies in translating everyday concepts into sophisticated
              solutions. To simplify this process, we've created an
              easy-to-follow selection guide to help alleviate any confusion.
            </p>

            <h4 style={{ color: "#BF6A6A" }}>
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
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <MDBCardTitle>WE DO THE WORK</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
    </div>
  );
}
