import React from "react";

import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  MDBBtn,
} from "mdb-react-ui-kit";


export default function intro(){
  return(
    <div>
    <h3 className="text-center">Are you ready to <strong>ADD VALUE </strong> to your business without the added workload? While streamlining organization, avoiding repetition and eliminating overheard.</h3>
    <br></br>
    <Row>
    <Col>
    <motion.div whileHover={{ scale: 0.95 }}>
   <MDBBtn rippleColor='light' color='white'
    style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
   >
    <h1><strong>DYNAMIC WEBSITE DEVELOPMENT</strong></h1>
    </MDBBtn>
    </motion.div>
    </Col>
    <Col>
    <motion.div whileHover={{ scale: 0.95 }}>
   <MDBBtn rippleColor='light' color='white'
    style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
    >
    <h1><strong>SOFTWARE DEVELOPMENT</strong></h1>
    </MDBBtn>
    </motion.div>
    </Col>
    </Row>
    <br></br>
    <Row>
    <Col>
    <motion.div whileHover={{ scale: 0.95 }}>
   <MDBBtn rippleColor='light' color='white'
    style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
    >
    <h1><strong>E-COMMERCE SOLUTIONS</strong></h1>
    </MDBBtn>
    </motion.div>
    </Col>
    <Col>
    <motion.div whileHover={{ scale: 0.95 }}>
   <MDBBtn rippleColor='light' color='white'
    style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
    >
    <h1><strong>GRAPHIC DESIGN ELEMENTS</strong></h1>
    </MDBBtn>
    </motion.div>
    </Col>
    </Row>
    <br></br>
    <Row>
    <Col>
    <motion.div whileHover={{ scale: 0.95 }}>
   <MDBBtn rippleColor='light' color='white'
    style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
    >
    <h1><strong>SOCIAL MEDIA INTEGRATION</strong></h1>
    </MDBBtn>
    </motion.div>
    </Col>
    <Col>
    <motion.div whileHover={{ scale: 0.95 }}>
   <MDBBtn rippleColor='light' color='white'
    style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
    >
    <h1><strong>MOBILE APP DEVELOPMENT</strong></h1>
    </MDBBtn>
    </motion.div>
    </Col>
    </Row>
    </div>
  )
}