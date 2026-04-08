
import "../App.css";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import DestinationSection from "../components/DestinationSection";
import StepsSection from "../components/StepsSection";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
    {/* <Header /> */}
      <Hero />
      {/* <DestinationSection /> */}
      <StepsSection />
      <WhyChoose />
      <Footer />
  
      {/* <section className='home'
        style={{ backgroundImage: `url(${image})` }}>

        <img src={image}></img>
      
      </section> */}
    </>
  )
  
};

  export default Home;