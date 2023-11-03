import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/index";

import 'bootstrap/dist/css/bootstrap.min.css';

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="App"
    >
        
    <Router>
    <Navbar />

    <AnimatedRoutes />

    <Footer />
    </Router>
    </div>
  );
}

export default App;
