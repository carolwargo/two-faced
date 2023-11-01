import React from 'react';
import {
  MDBBtn
} from 'mdb-react-ui-kit';

import { Row, Col, Container } from "react-bootstrap";
import Cover from "../../assets/images/Cover.png"

export default function Header() {

  return (
    <header>
      <div className='pt-4'>
      <Container>
<Row className='p-3'>
 
        <Col xs={6}>
        <p >CREATE A BRIGHTER FUTURE FOR YOUR BUSINESS</p>
        <h3 style={{fontFamily:'Great Vibes', color:'#7B014C', fontSize:'3rem'}}>STATE YOUR VISION</h3>
          </Col>
      
</Row>
</Container>
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
                style={{textShadow: '1px 2px #000000',fontFamily:'Great Vibes', color:'white', fontSize:'3rem'}}
              ><b>THINK OF THE POSSIBILITIES...</b></h1>
              <h4 style={{color:'#D690AA'}} className='mb-3'>We can help you get there!
            </h4>
            
              <MDBBtn tag="a" size="lg">
                <a href="#start" style={{color:'white'}}>Learn More</a>
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
