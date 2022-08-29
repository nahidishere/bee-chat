import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Hero from "./Hero/Hero";
import StayClose from "./StayClose/StayClose";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <StayClose />
      <Footer />
    </div>
  );
};

export default Home;
