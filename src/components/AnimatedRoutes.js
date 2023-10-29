import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "../views/Home/Home";
import About from "../views/About/About";
import Services from "../views/Services/Services";
import Consulting from "../views/Consulting/Consulting";
import Programs from "../views/Programs/Programs";
import Contact from "../views/Contact/Contact";
import Test from "../views/Test/Test";

import {AnimatePresence} from "framer-motion"
function AnimatedRoutes(){
    const location = useLocation(); 


    return(

        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
  
      </Routes>

      </AnimatePresence>
    )   
}
export default AnimatedRoutes;