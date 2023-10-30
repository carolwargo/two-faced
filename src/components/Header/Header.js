import React from 'react';
import LogoIcon from "../../assets/images/LogoIcon.png"
import {
  MDBBtn
} from 'mdb-react-ui-kit';

import { Row, Col } from "react-bootstrap";
import Cover from "../../assets/images/Cover.png"

export default function Header() {

  return (
    <header>
      <div className='pt-4'>
        
<Row className='p-3'>
        <Col xs={5}>
        <p>CREATE A BRIGHTER FUTURE FOR YOUR BUSINESS</p>
        <h2>State Your <span style={{fontFamily:'Great Vibes', color:'#7B014C', fontSize:'4rem'}}>Vision</span></h2>
          </Col>
          <Col>
          <div>
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
          </Col>
</Row>

      </div>
      <div
        className='p-5 text-center bg-image position-relative' // Add position-relative
        style={{ 
          backgroundImage: `url(${Cover})`,
          height: '400px' 
        }}
      >
        <div className='mask' 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, .6)',
            position: 'absolute', // Position absolute
            top: 0, // Align to the top
            left: 0, // Align to the left
            width: '100%', // Full width
            height: '100%' // Full height
          }}
        >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'
                style={{textShadow: '1px 2px #000000'}}
              ><b>THINK OF THE POSSIBILITIES...</b></h1>
              <h4 style={{color:'#D690AA'}} className='mb-3'>We can help you get there!
            </h4>
            
              <MDBBtn tag="a" size="lg">
                Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
