import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import HeroSection from './pages/HeroSection';
import Services from './pages/Services';
import Journey from './pages/Journey';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <Services />
        <Journey />
        {/* <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="/services" element={<Services />} />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;