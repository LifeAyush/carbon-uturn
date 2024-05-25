import React from "react"
import "./aboutUs.css"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import AboutHero from "../../Components/AboutHero/AboutHero"
import Mission from "../../Components/Mission/Mission"
import Vision from "../../Components/Vision/Vision"
import OurTeam from "../../Components/OurTeam/OurTeam"
import bgimg from "../../Assets/Images/aboutMissionBg.png"

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div>
                <AboutHero />
                <section style={{ background: `url(${bgimg})` }}>
                    <Mission />
                    <Vision />
                </section>
                <OurTeam />
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs
