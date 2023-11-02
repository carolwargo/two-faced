import React from "react";
import { motion} from "framer-motion";

const Contact = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <h1  style={{fontFamily:'Great Vibes', color:'#BF6A6A'}}>Contact</h1>
        </motion.div>
    );
};

export default Contact;