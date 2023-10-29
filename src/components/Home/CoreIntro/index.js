import React from "react";

import {Row,Col} from "react-bootstrap";
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Dev from "../../../assets/images/Dev.png";
import Design from "../../../assets/images/Design.png";
import GraphicDesign from "../../../assets/images/GraphicDesign.png";
import Marketing from "../../../assets/images/Marketing.png";


export default function intro() {
  return (
    <div>
      <Container>
    <Row className="d-flex justify-content-center">
      <Col>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
      <Card.Body>
      <Card.Title className="text-center">Dynamic Web Design</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={Design} />
      </Card>
      </motion.div>
      </Col>

      <Col>
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
        <Card.Img variant="top" src={Dev} />
        <Card.Body>
          <Card.Title className="text-center">Software Solutions</Card.Title>
        </Card.Body>
      </Card>
      </motion.div>
      </Col>

      <Col>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
        <Card.Img variant="top" src={Marketing} />
        <Card.Body>
        <Card.Title className="text-center">Digital Marketing</Card.Title>
        </Card.Body>
      </Card>
      </motion.div>
      </Col>
      <Col>
    
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
      <Card.Body>
      <Card.Title className="text-center">Graphic Design</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={GraphicDesign} />
      </Card>
      </motion.div>
      </Col>
     
      </Row>
      </Container>
    </div>
  );
}





    