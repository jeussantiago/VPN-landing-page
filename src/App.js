import React from 'react';
import './App.css';

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import WorldConnect from "./components/WorldConnect";
import DeviceConnect from "./components/DeviceConnect";
import Encrypt from "./components/Encrypt";
import RiskSection from "./components/RiskSection";
import Comments from "./components/Comments";
import Prices from "./components/Prices";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <WorldConnect />
      <DeviceConnect />
      <Encrypt />
      <RiskSection />
      <Comments />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
