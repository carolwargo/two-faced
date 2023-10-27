import React from 'react';
import {
  MDBBtn
} from 'mdb-react-ui-kit';

import CoverIndustrial from "../../assets/images/CoverIndustrial.png"

export default function Header() {

  return (
    <header>
      <div
        className='p-5 text-center bg-image position-relative' // Add position-relative
        style={{ 
          backgroundImage: `url(${CoverIndustrial})`,
          height: '400px' 
        }}
      >
        <div className='mask' 
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, .25)',
            position: 'absolute', // Position absolute
            top: 0, // Align to the top
            left: 0, // Align to the left
            width: '100%', // Full width
            height: '100%' // Full height
          }}
        >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <MDBBtn tag="a" outline size="lg">
                Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
