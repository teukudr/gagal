import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurService from './components/OurService';
import WhyUs from './components/WhyUs';
import Testimonial from "./components/Testimonial";
import Pesan from "./components/Pesan";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <OurService/>
    <WhyUs/>
    <Testimonial/>
    <Pesan/>
    <FAQ/>
    <Footer/>
    </>
  );
}

export default App;
