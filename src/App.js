import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import About from './pages/About';
import Baseboard from './components/Baseboard';
import "./App.css";



function App() {
  return (
 
    <Router>
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>

    
 
    

    
    <Baseboard />
  </Router>
  
);
}
    
  

export default App;
