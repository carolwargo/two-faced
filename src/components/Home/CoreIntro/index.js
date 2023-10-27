import React from "react";

import {Row,Col} from "react-bootstrap";
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';



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
    
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </motion.div>
      </Col>
      <Col>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </motion.div>
      </Col>
      <Col>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </motion.div>
      </Col>
      </Row>
<br></br>
      <Row>
      <Col>
    
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </motion.div>
      </Col>
      <Col>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </motion.div>
      </Col>
      <Col>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </motion.div>
      </Col>
      </Row>
    </div>
  );
}





    