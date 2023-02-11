import React from 'react';
// import About from './Components/aboutpage/About';
import Headers from './globals/components/Header.js';
import Footer from './globals/components/Footer';
import Homepage from './screens/home/Homepage.js';
import { Route, Routes } from 'react-router-dom';
// import AboutAmphicore from './screens/home/AboutAmphicore.js';
import About from './screens/home/About.js';
import AboutAmphicore from './screens/home/AboutAmphicore.js';

function App() {
  
  return (
   <>
   <Headers />
   <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/aboutus" element={<About/>} />
   </Routes>
    {/* <About /> */}
    {/* <AboutAmphicore /> */}
    <Footer />
   </>
  );
}

export default App;
