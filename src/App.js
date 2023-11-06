import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/Footer/index";
import Navbar from "./components/Navbar/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  
  return (
    <div className="App">

    <Router>
  <Navbar />
    <AnimatedRoutes />

    <Footer />
    </Router>
    </div>
  );
}

export default App;