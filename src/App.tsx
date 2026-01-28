import React from 'react';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
>>>>>>> Stashed changes
import Navbar from './components/Nav';
import HeroSection from './pages/HeroSection';
import Services from './pages/Services';
import Journey from './pages/Journey';
<<<<<<< Updated upstream
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
=======
import Projects from './pages/Projects';
import OurTeam from './pages/OurTeam';
import Feedback from './pages/Feedback';
import ContactUs from './pages/ContactUs';
import Location from './pages/Location';
import Footer from './components/Footer';
import ProgressIndicator from './components/ProgressIndicator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProgressIndicator />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <Services />
      </section>
      <Journey />
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <OurTeam />
      </section>
      <Feedback />
      <section id="contact">
        <ContactUs />
      </section>
      <Location />
      <Footer />
    </div>
>>>>>>> Stashed changes
  );
}

export default App;