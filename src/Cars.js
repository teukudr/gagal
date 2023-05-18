import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/HeroCariMobil';
import FormCariMobil from "./components/FormCariMobil";
import Footer from "./components/Footer";


function Cars() {
  return (
    <>
    <Navbar />
    <Hero />
    <FormCariMobil/>
    <Footer/>
    </>
  );
}

export default Cars;