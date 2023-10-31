import React from "react";

import {motion} from "framer-motion";
import DevelopmentServices from "../../components/Services/Development/DevelopmentServices"
import WebDesign from "../../components/Services/CoreServices/WebDesign/index";
import SoftwareDev from "../../components/Services/CoreServices/SoftwareDev/index";
import DigitalMarketing from "../../components/Services/CoreServices/DigitalMarketing/index";
import Ecommerce from "../../components/Services/CoreServices/ECommerce";
import SocialMedia from "../../components/Services/CoreServices/SocialMedia";
import GraphicDesign from "../../components/Services/CoreServices/GraphicDesign";


import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileApp from "../../components/Services/CoreServices/MobileApp";



export default function Services () {
    return (

        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
     >
        <div>
        <Container>
<DevelopmentServices/>



</Container>
<br></br>
<br></br>

<Container> 
<div id="webDesign">  
<WebDesign/>
</div>
</Container>
<br></br>
<br></br>

<Container>
<div id="softwareDev">  
<SoftwareDev/>
</div>
</Container>    
<br></br>
<br></br>

<Container>
<div id="graphicDesign">  
<GraphicDesign/>
</div>
</Container>    
<br></br>
<br></br>


<Container>
<div id="digitalMarketing">  
<DigitalMarketing/>
</div>
</Container>    
<br></br>
<br></br>


<Container>
<div id="ecommerce">  
<Ecommerce/>
</div>
</Container>    
<br></br>
<br></br>

<Container>
<div id="socialMedia">  
<SocialMedia/>
</div>
</Container>    
<br></br>
<br></br>

<Container>
<div id="mobileApp">  
<MobileApp/>
</div>
</Container>    
<br></br>
<br></br>

</div>

        </motion.div>

    )
}