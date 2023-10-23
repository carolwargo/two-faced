import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
