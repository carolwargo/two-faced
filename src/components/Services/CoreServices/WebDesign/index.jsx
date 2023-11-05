import React from "react";
import MeCard from "../../../../assets/images/MeCard.png";
import DoDont from "../../../../assets/images/DoDont.png";
import {motion} from "framer-motion";

import Teal from "../../../../assets/images/Teal.png";

import { Container, Row, Col } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const WebDesign = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        backgroundImage: `url(${Teal})`,
     
      }}
    >
        <div>
 
      <br></br>
      <Container className="web-design" id="webDesign">
        <h3>
        <b>
          DYNAMIC WEB DESIGN</b>
      </h3>
      <h5> CREATING INTERACTIVE AND USER-FRIENDLY WEBSITES
        </h5>
        <p>
        Dynamic web design is a crucial aspect of modern web development,
        allowing websites to go beyond static content and provide a more
        immersive user experience. Unlike static websites, which display fixed
        content to all users, dynamic websites adapt and respond to user
        interactions, making them more engaging and user-friendly.
        
      </p>
       
        
        <br></br>
        <Row>
        <Col xs={6}>
        <p>Now to clarify, <b>"DYNAMIC"</b> does not mean "<s>COMPLICATED</s>!"</p>
        <h5>WEBSITE ANALYSIS</h5>
        <p>
     <b>Simple is good</b>-The goal is to make a website seem simple regardless of size, content, reach or capabilities. <br></br>
     <b>Clear & Concise</b>
     <ul>
      <li>
      “Niche” should be obvious.
        </li>
        </ul> 
     </p>
        </Col>
          <Col xs={6}>
        <motion.div whileHover={{ scale: 0.95 }}>
     <img src={DoDont} alt="DoDont" style={{ width: "100%", height: "auto" }} />
     </motion.div>
      </Col>
     
     </Row>
      <br></br>
      <Container>
        <Row>
       <Col className="web-design">
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
        </Container>
        <br></br>
      <Row>
        <Col xs={6}>
      <h5><b><u>KEY COMPONENTS OF DYNAMIC WEB DESIGN:</u></b></h5>
      
      <ol>
        <li>
          <b>Database Management Systems (e.g., MySQL, MongoDB):</b> Databases
          store and retrieve data for dynamic websites. They are used to manage
          user information, product listings, content, and more. Database
          integration is a key component of dynamic web design.
        </li>
        <li>
          <b>Content Management Systems (CMS):</b> CMS platforms like WordPress,
          Drupal, and Joomla facilitate dynamic content creation and management.
          They provide user-friendly interfaces for adding, editing, and
          organizing content.
        </li>
        <li>
          <b>Single Page Applications (SPAs): </b>SPAs load a single HTML page
          and dynamically update content as the user interacts with the site.
          This provides a smooth, app-like experience without constant page
          reloads.
        </li>
        <li>
          <b>Frameworks and Libraries (e.g., React, Angular, Vue.js): </b>These
          JavaScript frameworks and libraries offer pre-built components and
          functionalities for creating dynamic web applications efficiently.
        </li>
      </ol>
      </Col>

      <Col xs={6}>
      <h5><b><u>BENEFITS OF DYNAMIC WEB DESIGN</u></b></h5>    
      <ol>
        <li>
          <b>Enhanced User Engagement: </b>Dynamic websites provide a more
          interactive and engaging user experience, leading to increased user
          satisfaction and longer on-site durations.
        </li>
        <li>
          <b>Personalization:</b> Dynamic content allows websites to tailor
          information based on user preferences, location, behavior, and more,
          creating a personalized experience.
        </li>
        <li>
          <b>Real-Time Updates:</b> Information can be updated in real-time
          without requiring users to refresh the page, providing the latest data
          and content instantly.
        </li>
        <li>
          <b>Efficient Data Management:</b> Databases and server-side scripting
          enable efficient storage, retrieval, and management of data,
          facilitating tasks like user registrations, e-commerce transactions,
          and more.
        </li>
      </ol>
      </Col>
      </Row>
      <p>
        <b>
          Dynamic web design is at the forefront of modern web development,
          empowering websites to provide dynamic, personalized, and engaging
          experiences for users. By leveraging technologies like JavaScript,
          server-side scripting, and databases, developers can create websites
          that adapt to user behavior and preferences, setting the stage for a
          more interactive web.
        </b>
      </p>
      </Container>
      </div>
    </motion.div>
  );
};

export default WebDesign;
