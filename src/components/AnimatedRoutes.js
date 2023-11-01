import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "../views/Home/Home";
import About from "../views/About/About";
import Services from "../views/Services/Services";
import Consulting from "../views/Consulting/Consulting";
import Programs from "../views/Programs/Programs";
import Contact from "../views/Contact/Contact";


import WebDesign from "./Services/CoreServices/WebDesign/index";
import SoftwareDev from "./Services/CoreServices/SoftwareDev/index";
import DigitalMarketing from "./Services/CoreServices/DigitalMarketing/index";
import Ecommerce from "./Services/CoreServices/ECommerce/index";
import SocialMedia from "./Services/CoreServices/SocialMedia/index";
import GraphicDesign from "./Services/CoreServices/GraphicDesign/index";
import MobileApp from "./Services/CoreServices/MobileApp/index";


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
        

        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/software-dev" element={<SoftwareDev />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/mobile-app" element={<MobileApp />} />
  
      </Routes>

      </AnimatePresence>
    )   
}
export default AnimatedRoutes;