import React from "react";

import { motion} from "framer-motion";
import DevelopmentServices from "../../components/Services/Development/DevelopmentServices"
import WebDesign from "../../components/Services/CoreServices/WebDesign/index";
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
<Container id="webDesign">  
<WebDesign/>
</Container>

<br></br>
<br></br>


<br></br>
<br></br>


<br></br>
<br></br>


<br></br>
<br></br>


<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>

        </motion.div>
    )
}