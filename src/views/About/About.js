import React from "react";

import { MDBBtn } from 'mdb-react-ui-kit';
import Brand from '../../components/About/Brand/index'
import Culture from '../../components/About/Culture/index'
import CustomerService from '../../components/About/CustomerService/index'

export default function About (){

    return (
        <div>
            <br></br>
            <h1><strong>WHO WE ARE</strong></h1>
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

            <Brand/>
            <br></br>

            <Culture/>
            <br></br>

            <CustomerService/>
            <br></br>

            <br></br>
        <h2>TO WORK WITH THE RIGHT PEOPLE, FOR THE RIGHT REASONS, WHILE ADDING VALUE TO YOUR BUSINESS</h2>
           
            <MDBBtn color='secondary'>CONTACT US</MDBBtn>
        </div>
    )
}