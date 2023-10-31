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
import Need from "../../assets/images/Need.png";

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
        <Col>
          <h1>
            <strong>
              We Are{" "}
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
        </Col>
        <Col></Col>
      </Row>
      <br></br>

      <Container>
     

<Row className="dflex">
<Col md={7}>
<h1>
        <strong>Where Do We Start?</strong>
      </h1>
      <h5>We Start with Eliminating Any Doubt Concerning "Need" By <br></br>Addressing Two Fundamental Questions Frequently Asked by Business Owners... </h5>
        
        <ol>
          <li><i>Does My Business Really Need a Website?</i></li>
          <li><i>Why Do I Need a Professional to Develop a Website?</i></li>
        </ol>
  <h5><i> <u> "Does My Business Really Need a Website?"</u> </i></h5>
  <Container>
  <p>YES, Every Business Needs A Website...</p>
  </Container>
  <h5><i><u>"Why Do I Need a Professional to Develop My Site?"</u> </i> </h5>
  <Container>
  <p>Technically You Can Do It Yourself <b>But</b>...</p>

  </Container>
  </Col>
 
  <Col md={5} className="bg-dark text-white align-items-end justify-content-end">
  <img src={Need} alt="website-need-visual" style={{ width: '100%' }} />
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
