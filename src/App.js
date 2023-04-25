import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './components/Pages/Home';
import Chappie from './components/Pages/Consultation';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import SignIn from './components/Pages/SignIn';
import Certificate from './components/Pages/Certificate';
import CertificateForm from './components/Pages/CertificateForm';
import Prescription from './components/Pages/Prescription';
// app.js

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulation" element={<Chappie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/certificateForm" element={<CertificateForm />} />
        <Route path="/prescription" element={<Prescription />} />
      </Routes>
      <Footer />
      </div>

    </Router>
  );
}

export default App;
