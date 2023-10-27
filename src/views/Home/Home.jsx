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

import CoreIntro from "../../components/Home/CoreIntro/index";
import { Col, Row } from "react-bootstrap";
import MeCard from "../../assets/images/MeCard.png";

export default function Home() {
  return (
    <div className="home-page" id="home-page">
     <div className="text-center">
        <h1>Unlock the Full Potential of Your Business</h1>
        <p>
          In today's dynamic market, businesses need more than just survival
          tactics – they need strategies that drive growth and sustainability.
          At [Your Company], we're committed to helping you add value to your
          operations. Our tailored solutions are designed to streamline your
          organization, eliminate redundancies, and reduce overhead costs.
        </p>
      </div>
      <br></br>
      <p>
        Here at <b>TWO FACED</b>, we offer a comprehensive suite of IT services
        tailored to meet your specific business needs. Our dedicated team of
        experts is committed to delivering solutions that drive efficiency,
        innovation, and growth.
      </p>
      <h4>
        <strong>Our Services Include</strong>{" "}
        <span style={{ font: "caption", color: "gray" }}>
          but are not limited too...
        </span>
      </h4>
      <br></br>
    
        <br></br>
      <CoreIntro />
      
      <br></br>
      <br></br>

      <p>"LET US ASSIST YOU IN DEFINING YOUR NEEDS"</p>
      <h1>
        <strong>Where We Start</strong>
      </h1>
      <p>
        We understand that gaining clarity is a significant step towards finding
        the right solution, and We further acknowledge that narrowing down your
        requirements can be a daunting task. Our expertise lies in translating
        everyday concepts into sophisticated solutions. To simplify this
        process, we've created an easy-to-follow selection guide to help
        alleviate any confusion.
      </p>
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
    </div>
  );
}
