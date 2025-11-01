import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import GetInvolved from "./components/GetInvolved";
import Donate from "./components/Donate";
import Mission from "./components/Mission";
import Volunteers from "./components/Volunteers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeInSection from "./components/Atoms/FadeInsections";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stories from "./components/Stories";
import Partner from "./pages/Partner";

function Home() {
  return (
    <div className="App overflow-x-hidden w-[100%]">
      <Navigation />
      <Hero />
      <FadeInSection><About /></FadeInSection>
      <FadeInSection><Programs /></FadeInSection>
      <FadeInSection><GetInvolved /></FadeInSection>
      <Donate />

      <FadeInSection><Mission /></FadeInSection>
      <FadeInSection><Stories /></FadeInSection>
      <Volunteers />
     <FadeInSection> <Contact /></FadeInSection>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/partnerWithUS" element={<Partner />} />
      </Routes>
    </Router>
  );
}

export default App;
