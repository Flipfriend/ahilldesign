import * as React from 'react';
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import SolarSystem from "./components/SolarSystem";
import ScrollText from "./components/ScrollText";
import CarouselCards from "./components/CarouselCards";
import Footer from "./components/Footer";
import './assets/paladin-tokens.css';
import './index.css';
import './app.css';


function App() {
  return (
    <div className="App">
      <div className="main-contain"> 
      <Navbar/> 
        <div className="section-container">
          <div className="hero-content border">
            <div className="meta-container">
              <div className="hero-container">
                <h2 className="heroTitle">I'm Andrew Hill,</h2>
                <h2 className="heroRole">A Product Designer</h2>
                <h2 className="heroLocal">In Los Angeles, Earth</h2>
              </div>  
              <Button type="button" text='About Me'></Button>
            </div>
          </div>
        <div className="hero-image-container">
          <SolarSystem/>
        </div>
        </div>
        <div className="skill-container">
          <ScrollText/>
        </div>
        <div className="caseCards"> 
        <CarouselCards/>
        </div>
      <Footer />  
      </div>
    </div>
  )
}


export default App;