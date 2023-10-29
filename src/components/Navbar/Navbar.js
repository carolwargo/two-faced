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

import LogoIcon from "../../assets/images/LogoIcon.png"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-white'>
      <MDBNavbar expand='lg' className='bg-white'
            style={{
              boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
             }}
             >
        <MDBContainer fluid className='bg-white'>
          <MDBNavbarBrand href='#' className='bg-white'>
            <img src={LogoIcon} alt='LogoIcon' 
               style={{ width: '100px', height: 'auto', marginTop: '-1rem' }} 
                 />
          </MDBNavbarBrand>
          <MDBNavbarToggler
          className='bg-white'
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MDBIcon className='bg-white' icon='bars' />
        </MDBNavbarToggler>
       
          <MDBCollapse navbar show={isMenuOpen}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 bg-white'>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/'>Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/about'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/services'>Services</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white'href='/consulting'>Consulting</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/programs'>Programs</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/contact'>Contact</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='bg-white' href='/test'>Test</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <span className='navbar-text bg-white'> </span>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
