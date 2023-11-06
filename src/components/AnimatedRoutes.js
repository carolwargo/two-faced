import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/Home/Home";
import About from "../views/About/About";
import Layout from "../components/Layouts/Layout";

import ServiceLayout from "../components/Layouts/ServiceLayout";
import Services from "../views/Services/Services";
import WebDesign from "../views/Services/WebDesign/WebDesign";
import SoftwareDev from "../views/Services/SoftwareDev/index";
import DigitalMarketing from "../views/Services/DigitalMarketing/index";
import GraphicDesign from "../views/Services/GraphicDesign/index";
import MobileApp from "../views/Services/MobileApp/index";
import SocialMedia from "../views/Services/SocialMedia/index";

import AdditionalLayout from "../components/Layouts/AdditionalLayout";
import Consulting from "../views/AdditionalServices/Consulting/Consulting";
import Support from "../views/AdditionalServices/Support/Support";
import Training from "../views/AdditionalServices/Training/Training";
import Programs from "../views/AdditionalServices/Programs/Programs";

import Contact from "../views/Contact/Contact";

import { AnimatePresence } from "framer-motion";
import AdditionalServices from "../views/AdditionalServices/AdditionalServices";

function AnimatedRoutes() {
  
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="/services" element={<ServiceLayout />}>
          <Route index element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />

          <Route path="software-dev" element={<SoftwareDev />} />

          <Route path="graphic-design" element={<GraphicDesign />} />

          <Route path="digital-marketing" element={<DigitalMarketing />} />

          <Route path="mobile-app" element={<MobileApp />} />

          <Route path="social-media" element={<SocialMedia />} />
          </Route>


          <Route path="/additional-services" element={<AdditionalLayout />}>
          <Route index element={<AdditionalServices />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="support" element={<Support />} />
          <Route path="training" element={<Training />} />
          <Route path="programs" element={<Programs />} />
        </Route>

      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
