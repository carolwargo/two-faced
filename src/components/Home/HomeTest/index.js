import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { MDBBtn } from "mdb-react-ui-kit";

export default function intro() {
  return (
    <div>
      <div className="text-center">
        <h1>UNLOCK THE FULL POTENTIAL OF YOUR BUSINESS...</h1>
        <p>
          In today's dynamic market, businesses need more than just survival
          tactics – they need strategies that drive growth and sustainability.
          At [Your Company], we're committed to helping you add value to your
          operations. Our tailored solutions are designed to streamline your
          organization, eliminate redundancies, and reduce overhead costs.
        </p>
      </div>
      <br></br>
      <Row>
        <Col>
          <motion.div whileHover={{ scale: 0.95 }}>
          <Link to="/web-design#WebDesign"> {/* Add the path and the ID */}
            <MDBBtn
              rippleColor="light"
              color="white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >            
             <h1>
                <strong>DYNAMIC WEBSITE DEVELOPMENT</strong>
              </h1>
            </MDBBtn>
            </Link>
          </motion.div>
        </Col>
        <Col>
          <motion.div whileHover={{ scale: 0.95 }}>
          <Link to="/software-dev#softwareDev">
            <MDBBtn
              rippleColor="light"
              color="white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <h1>
                <strong>SOFTWARE DEVELOPMENT</strong>
              </h1>
            </MDBBtn>
            </Link>
          </motion.div>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <motion.div whileHover={{ scale: 0.95 }}>
            <MDBBtn
              rippleColor="light"
              color="white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <h1>
                <strong>E-COMMERCE SOLUTIONS</strong>
              </h1>
            </MDBBtn>
          </motion.div>
        </Col>
        <Col>
          <motion.div whileHover={{ scale: 0.95 }}>
            <MDBBtn
              rippleColor="light"
              color="white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <h1>
                <strong>GRAPHIC DESIGN ELEMENTS</strong>
              </h1>
            </MDBBtn>
          </motion.div>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <motion.div whileHover={{ scale: 0.95 }}>
            <MDBBtn
              rippleColor="light"
              color="white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <h1>
                <strong>SOCIAL MEDIA INTEGRATION</strong>
              </h1>
            </MDBBtn>
          </motion.div>
        </Col>
        <Col>
          <motion.div whileHover={{ scale: 0.95 }}>
            <MDBBtn
              rippleColor="light"
              color="white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <h1>
                <strong>MOBILE APP DEVELOPMENT</strong>
              </h1>
            </MDBBtn>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}
