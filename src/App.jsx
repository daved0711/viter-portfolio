import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './components/pages/frontend/About';
import Home from './components/pages/frontend/Home';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<About />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
