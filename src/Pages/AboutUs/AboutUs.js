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
            <div style={{ width: "100vw", overflowX: "hidden" }}>
                <AboutHero />
                <section
                    style={{
                        background: `linear-gradient(rgb(255,255,255,0.5) , rgb(255,255,255,0.5)), url(${bgimg})`,
                    }}
                >
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
