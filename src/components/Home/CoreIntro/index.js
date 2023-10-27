import React from "react";

import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { MDBBtn } from "mdb-react-ui-kit";



export default function intro() {
  return (
    <div>
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
      <Row>
        <Col>
          <motion.div whileHover={{ scale: 0.95 }}>
            <MDBBtn
              rippleColor="light"
              color="white"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <h1>
                <strong>DYNAMIC WEBSITE DEVELOPMENT</strong>
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
                <strong>SOFTWARE DEVELOPMENT</strong>
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
              style={{ 
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
                width: "100%",
                backgroundColor: "#7B516A",
                color: "white",
            }}
            >
              <h1 className="color-white"
                    style={{
                        fontSize: "2rem",
                        padding: "1rem",
                    }}>
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
