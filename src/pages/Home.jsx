<<<<<<< HEAD
import "../App.css";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import DestinationSection from "../components/DestinationSection";
import StepsSection from "../components/StepsSection";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";
=======
import React from 'react'
import image from '/src/assets/Hero2.png'
>>>>>>> f4e19abdda8e95b830038deccadcf58b9207fe67

const Home = () => {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <Hero />
      {/* <DestinationSection /> */}
      <StepsSection />
      <WhyChoose />
      <Footer />
    </>
  );
};
=======
    <section className='home'
      style={{ backgroundImage: `url(${image})`}}>

      {/* <img src={image}></img> */}
      
    </section>
    </>
  )
}
>>>>>>> f4e19abdda8e95b830038deccadcf58b9207fe67

export default Home;