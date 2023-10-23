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
    <Routes>
    <div className="App">
      <Navbar />
      <Header />
      <Route path="/" element={<Home />} />
    </div>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
