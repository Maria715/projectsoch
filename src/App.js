import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import GetInvolved from './components/GetInvolved';
import Donate from './components/Donate';
import Mission from './components/Mission';
// import Stories from './components/Stories';
import Volunteers from './components/Volunteers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <GetInvolved />
      <Donate />
      <Mission />
      {/* <Stories /> */}
      <Volunteers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
