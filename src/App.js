import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './components/Pages/Home';
import Chappie from './components/Pages/Chappie';
// import About from './components/Pages/About';
// import Contact from './components/Pages/Contact';


export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chappie" element={<Chappie />} />
          {/* <Route path="/contact" component={Contact} /> */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
      </div>

    </Router>
  );
}

export default App;
