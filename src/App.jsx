import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Pages/Layout/Navbar';
import HomeSample from './Pages/Samples';


const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sample" element={<HomeSample />} /> */}
          {/* <Route path="/join-us" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
