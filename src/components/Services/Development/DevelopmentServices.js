import React, { useState } from "react";
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

import { Col, Row } from "react-bootstrap";
import MeCard from "../../../assets/images/MeCard.png";

export default function DevServices() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList((prevShowList) => !prevShowList); // Toggle the value
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
      <h1>SERVICES</h1>
        <h4 style={{color:'#D690AA'}}>
          <strong>Core Services</strong>
        </h4>

        <p>
          Empower your online presence with our development expertise. Whether
          it's crafting intuitive front-end interfaces or building robust
          back-end systems, we're equipped to handle it all. From full-stack
          development to specialized app creation, our team is proficient in
          turning your ideas into functional, user-friendly applications.
        </p>

        <Row className="align-items-center justify-content-around bg-secondary-subtle text-black pt-3 pb-3 rounded">
          <Col md={5} className="bg-secondary-subtle text-black">
            <ul>
              <li>Dynamic Website Development</li>
              <li>Software Development Solutions</li>
              <li>E-Commerce Integration</li>
             </ul>
          </Col>
          <Col md={5}>
            <ul>
            <li>Graphic Design</li>
              <li>Social Media Integration</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
            </ul>
            </Col>
        </Row>
<br></br>
<br></br>

        <Row>
          <h4 style={{color:'#D690AA'}}><b>Additional Services</b></h4>
          <Col md={4} >
            <motion.div whileHover={{ scale: 0.95 }}>
              <MDBCard className="bg-secondary-subtle text-black text-md-center shadow-5-primary">
                <MDBRipple
                  rippleColor="#D690AA"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <a href="/">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody >
                  <MDBCardTitle><b> CONSULTING </b></MDBCardTitle>
                  <MDBCardText>
                    <ul>
                      <li>Affiliate Program Start-Up</li>
                      <li>"Partner Up Program"</li>
                    </ul>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div whileHover={{ scale: 0.94 }}>
              <MDBCard className="bg-secondary-subtle text-black text-md-center">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <a href="/">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle><b>PROGRAMS & PARTNERSHIPS</b> </MDBCardTitle>
                  <MDBCardText>
                    <ul>
                      <li>Affiliate Program Start-Up</li>
                      <li>"Partner Up Program"</li>
                    </ul>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div whileHover={{ scale: 0.95 }}>
              <MDBCard className="bg-secondary-subtle text-black text-md-center">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <a href="/">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle> <strong>TRAINING & SUPPORT</strong></MDBCardTitle>
                  <MDBCardText>
            <ul>
              <li>Affiliate Program Start-Up</li>
              <li>"Partner Up Program"</li>
            </ul>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>
        </Row>
        <br></br>
      

        <br></br>
        <Col>
          <h4 style={{color:'#D690AA'}}>Development Services Description</h4>
          <p>Click The Desired Service Below To Learn More...</p>
        </Col>
        <Row className="development-services-items-row1 mb-4">
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
                  <MDBCardTitle> Front-End Development</MDBCardTitle>
                  <button
                    className="btn custom-button"
                    style={{
                      width: "100%",
                      backgroundColor: "black",
                      border: "none",
                      color: "white",
                      boxShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
                      transition:
                        "background-color 0.6s ease, box-shadow 0.3s ease",
                    }}
                    onClick={handleClick}
                  >
                    {showList ? "Hide Content" : "Show Content"}
                  </button>
                  {showList && (
                    <ul>
                      <li>
                        <strong>Situation:</strong> In an evolving real estate
                        landscape, I recognized the urgency to modernize our
                        practices through technology.
                      </li>
                      <li>
                        <strong>Task:</strong> Utilized advanced real estate
                        software, implemented paperless systems, and optimized
                        digital communications to revolutionize operations.
                      </li>
                      <li>
                        <strong>Action:</strong> Conducted targeted research to,
                        integrate seamless tech solutions, streamline
                        transactions through paperless systems, enhanced
                        collaboration and client engagement and prioritized
                        website maintenance for an optimal user experience.
                      </li>
                      <li>
                        <strong>Result:</strong> Significantly enhanced
                        operational efficiency and reduced turnaround times.
                        While, simultaneously, eliminating the need for support
                        staff. A dynamic online presence elevated client
                        experiences, reinforcing a competitive edge in the
                        market.
                      </li>
                    </ul>
                  )}
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>

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
                  <MDBCardTitle> Back-End Development</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>

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
                  <MDBCardTitle> Full Stack Development</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="/services">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>

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
                  <MDBCardTitle>Website Development</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="/services">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>
        </Row>
        <Row className="development-services-items-row2 mb-4">
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
                  <MDBCardTitle>
                    {" "}
                    Custom Web-Based App Development{" "}
                  </MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>

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
                  <MDBCardTitle> E-Commerce Development</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>

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
                  <MDBCardTitle>iOS & Android App Development</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="/services">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>

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
                  <MDBCardTitle>Cross-platform App Development</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="/services">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </motion.div>
          </Col>
        </Row>
        {/*end Development Services */}
      </div>
    </div>
  );
}
