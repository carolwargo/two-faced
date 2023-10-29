import React from "react";
import { motion} from "framer-motion";
import DevelopmentServices from "../../components/Services/Development/DevelopmentServices"



export default function Services () {
    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
            <h1>Services</h1>

<DevelopmentServices/>
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

<br></br>
<br></br>

        </motion.div>
    )
}