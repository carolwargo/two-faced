import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Nav() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <div className='bg-white'>
      <MDBNavbar expand='lg' className='bg-white'
            style={{
              boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
             }}
             >
        <MDBContainer fluid className='bg-white'>
          <MDBNavbarBrand href='#' className='bg-white'>
            Navbar w/ text
          </MDBNavbarBrand>
          <MDBNavbarToggler
            className='bg-white'
            type='button'
            data-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavText(!showNavText)}
          >
            <MDBIcon className='bg-white' icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavText}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 bg-white'>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/'>Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/services'>Services</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/consulting'>Consulting</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/about'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/test'>Test</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <span className='navbar-text bg-white'> Navbar text with an inline element </span>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
