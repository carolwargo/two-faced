import React from "react";

import { motion} from "framer-motion";
import DevelopmentServices from "../../components/Services/Development/DevelopmentServices"
import WebDesign from "../../components/Services/CoreServices/WebDesign/index";
import SoftwareDev from "../../components/Services/CoreServices/SoftwareDev/index";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Services () {
    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
     >
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

{/*}
<Container>
<div id="graphicDesign">  
<GraphicDesign/>
</div>
</Container>
    */}
<br></br>
<br></br>
{/*}
<Container>
<div id="digitalMarketing">  
<DigitalMarketing/>
</div>
</Container>
    */}

<br></br>
<br></br>
{/*}
<Container>
<div id="ecommerce">  
<Ecommerce/>
</div>
</Container>
    */}
<br></br>
<br></br>
{/*}
{/*}
<Container>
<div id="mobileApp">  
<MobileApp/>
</div>
</Container>
    */}
<br></br>
<br></br>
{/*}
<div id="webDesign">  
<WebDesign/>
</div>
</Container>
    */}
<br></br>
<br></br>
{/*}
<div id="webDesign">  
<WebDesign/>
</div>
</Container>
    */}

        </motion.div>
    )
}