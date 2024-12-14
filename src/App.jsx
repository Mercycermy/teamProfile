import React from "react";

import {
  About,
  Contact,
  Header,
  Skills,
  Testimonial,
  Work,
  TeamSection,
} from "./containers";

import { Navbar, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
