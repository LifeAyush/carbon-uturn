import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";
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
        {window.innerWidth > 900 ?
          <Graph width={80} height={50} marginX={10} marginY={7} />
          : <Graph width={70} height={50} marginX={15} marginY={7} />
        }
        <OurServices />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
