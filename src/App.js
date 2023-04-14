import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './components/Pages/Home';
import Chappie from './components/Pages/Chappie';
// app.js
console.log('apikey:', process.env.REACT_APP_API_KEY); // Access environment variable using `process.env`

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chappie" element={<Chappie />} />
      </Routes>
      <Footer />
      </div>

    </Router>
  );
}

export default App;
