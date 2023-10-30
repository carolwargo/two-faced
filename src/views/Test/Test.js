import React from "react";
import { motion} from "framer-motion";



const Test = () => {
    return (
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        
            <h1>Test</h1>
            
        </motion.div>
    );
}
export default Test;