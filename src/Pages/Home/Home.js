import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Stats from "../../Components/Stats/Stats";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import OurServices from "../../Components/OurServices/OurServices";
import Journey from "../../Components/Journey/Journey";
import Graph from "../../Components/Graph/Graph";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <Hero />
        <Journey />
        <Stats />
        <Graph width={80} height={50} marginX={7} marginY={7} />
        <OurServices />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
