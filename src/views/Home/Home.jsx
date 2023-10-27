import React from 'react';
import {motion} from 'framer-motion';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';


import CoreIntro from "../../components/Home/CoreIntro/index"
import { Col, Row } from 'react-bootstrap';
import MeCard from "../../assets/images/MeCard.png"

export default function Home() {
  return (
    <div className='home-page' id='home-page'>
 <br></br>
 <CoreIntro/>
 <br></br>
 <br></br>
        <p>"YOUR PARTNER IN IT SUCCESS AND INNOVATION"</p>
<h1><strong>We are Two-Faced IT</strong></h1>
<p>"A Passionate Team Dedicated To Empowering Businesses Through  harnessing the power of cutting-edge tools and frameworks to breathe life into innovative concepts. Our expertise spans the spectrum, from creating immersive user interfaces to engineering robust, secure backend solutions. We are driven by a commitment to provide users with seamless experiences while maximizing system performance. Our forte lies in transforming intricate challenges into refined, elegant solutions."</p>
        
        <br></br>
        

        <p>"WHERE DEVELOPMENT MEETS DESIGN"</p>
<h1><strong>What we do</strong></h1>
<p>Strenthen your online presence with our development expertise. Whether it's crafting intuitive front-end interfaces or building robust back-end systems, we're equipped to handle it all. From full-stack development to specialized app creation, our team is proficient in turning your ideas into functional, user-friendly applications.</p>
        
        <br></br>
        <p>Here at <b>2FACED</b>, we offer a comprehensive suite of IT services tailored to meet your specific business needs. Our dedicated team of experts is committed to delivering solutions that drive efficiency, innovation, and growth.</p>
        <h4><strong>Our Services Include</strong> <span style={{font: 'caption', color: "gray"}}>but are not limited too...</span></h4>

   
        <Row>
        <Col>
        <ul>
        <li>Front-end development</li>
        <li>Back-end development</li>
        </ul>
        </Col>
        <Col>
        <ul>
        <li>Full-stack development</li>
        <li>Custom website development</li>
        </ul>
        </Col>
        <Col>
        <ul>
        <li>E-commerce development</li>
        <li>Development of custom web-based applications</li>
</ul>
        </Col>
        <Col>
        <ul>
        <li>iOS and Android app development</li>
        <li>Cross-platform development</li>
</ul>
        </Col>
        </Row>
        <br></br>
        <br></br>

        <p>"LET US ASSIST YOU IN DEFINING YOUR NEEDS"</p>
<h1><strong>Where We Start</strong></h1>
<p>We understand that gaining clarity is a significant step towards finding the right solution, and We further acknowledge that narrowing down your requirements can be a daunting task. Our expertise lies in translating everyday concepts into sophisticated solutions. To simplify this process, we've created an easy-to-follow selection guide to help alleviate any confusion.</p>
        <br></br>
        <br></br>

<Row>
    <Col>
            <motion.div whileHover={{ scale: 0.95 }}>
    <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={MeCard} fluid alt='...' />

            <a href='/'>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
        </MDBRipple>
        <MDBCardBody>
            <MDBCardTitle>WE DO THE WORK</MDBCardTitle>
            <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
    </MDBCard>
    </motion.div>
    </Col>
    </Row>

    </div>
  );
}