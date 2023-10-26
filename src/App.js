import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Services from "./views/Services/Services";
import Consulting from "./views/Consulting/Consulting";
import Test from "./views/Test/Test";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Header />
    <div className="container mt-5">
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/test" element={<Test />} />

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
