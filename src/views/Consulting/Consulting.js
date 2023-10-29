import React from "react";
import { motion} from "framer-motion";

export default function Consulting () {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <h1>Consulting</h1>
        </motion.div>
    )
}