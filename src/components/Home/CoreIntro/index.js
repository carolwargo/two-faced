import React from "react";
import { Link } from 'react-router-dom';
import {Row,Col} from "react-bootstrap";
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Dev from "../../../assets/images/Dev.png";
import Design from "../../../assets/images/Design.png";
import GraphicDesign from "../../../assets/images/GraphicDesign.png";
import Marketing from "../../../assets/images/Marketing.png";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function intro() {
  return (
    <div
    >
      <Container>
    <Row className="d-flex justify-content-center">
    <h1 className="text-center" style={{fontFamily:'Great Vibes', color:'#BF6A6A',fontSize:"2rem"}}>SERVICE GALLERY</h1>  
      <Col md={3}
      style={{paddingBottom:"1rem"}}>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
       <Link to="/services#webDesign">
      <Card
         style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}
         >
      <Card.Body>
      <Card.Title className="text-center"
      style={{fontSize:'1rem'}}>Dynamic Web Design</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={Design} />
      </Card>
      </Link> 
      </motion.div>
      </Col>

      <Col md={3}
      style={{paddingBottom:"1rem"}}>
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
    <Link to="/services#softwareDev">
      <Card
         style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}
         >
        <Card.Img variant="top" src={Dev} />
        <Card.Body>
          <Card.Title className="text-center" style={{fontSize:'1rem'}}>Software Solutions</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      </motion.div>
      </Col>

      <Col md={3}
      style={{paddingBottom:"1rem"}}>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Link to="/services#digitalMarketing">
      <Card
         style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}
      >
        <Card.Img variant="top" src={Marketing} />
        <Card.Body >
        <Card.Title className="text-center" style={{fontSize:'1rem'}}>Digital Marketing</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      </motion.div>
      </Col>
      
      <Col md={3}
      style={{paddingBottom:"1rem"}}>
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
    <Link to="/services#graphicDesign">
      <Card
         style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}
         >
      <Card.Body>
      <Card.Title className="text-center" style={{fontSize:'1rem'}}>Graphic Design</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={GraphicDesign} />
      </Card>
      </Link>
      </motion.div>
      </Col>
     {/*ADD ADDITIONAL CARDS ecommerce, socialMedia, mobileApp */}
      </Row>
      </Container>





      
      <Container>
    <Row className="d-flex justify-content-center">
      <Col md={3}
      style={{paddingBottom:"1rem"}}>
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
    <Link to="/services#softwareDev">
      <Card
         style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}
         >
        <Card.Img variant="top" src={Dev} />
        <Card.Body>
          <Card.Title className="text-center" style={{fontSize:'1rem'}}>Software Solutions</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      </motion.div>
      </Col>
      <Col md={3}
      style={{paddingBottom:"1rem"}}>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
       <Link to="/services#webDesign">
      <Card
         style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}
         >
      <Card.Body>
      <Card.Title className="text-center"
      style={{fontSize:'1rem', textDecoration:'none'}}>Dynamic Web Design</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={Design} />
      </Card>
      </Link> 
      </motion.div>
      </Col>

      <Col md={3}
      style={{paddingBottom:"1rem"}}>
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
    <Link to="/services#graphicDesign">
      <Card
         style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
         >
      <Card.Body>
      <Card.Title className="text-center" style={{fontSize:'1rem'}}>Graphic Design</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={GraphicDesign} />
      </Card>
      </Link>
      </motion.div>
      </Col>

      <Col md={3}
      style={{paddingBottom:"1rem"}}>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Link to="/services#digitalMarketing">
      <Card
         style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}
      >
        <Card.Img variant="top" src={Marketing} />
        <Card.Body >
        <Card.Title className="text-center" style={{fontSize:'1rem'}}>Digital Marketing</Card.Title>
        </Card.Body>
      </Card>
      </Link>
      </motion.div>
      </Col>
      
   
     {/*ADD ADDITIONAL CARDS ecommerce, socialMedia, mobileApp */}
      </Row>
      </Container>
    </div>
  );
}





    