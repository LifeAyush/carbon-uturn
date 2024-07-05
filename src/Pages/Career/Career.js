import React from "react"
import "./career.css"
import Navbar from "../../Components/Navbar/Navbar"
import { openPositions } from "./openPositions"
import { Link } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"

const PositionCard = ({ role, location, link }) => {
    return (
        <Link to={link}>
            <section className="position-card">
                <p className="position-role">{role}</p>
                <p className="position-location">{location}</p>
            </section>
        </Link>
    )
}

const Career = () => {
    return (
        <>
            <Navbar />
            <section className="career-page">
                <section className="career-text-content">
                    <div className="career-vision">
                        <h1>Our Vision</h1>
                        <p>CUT empowers everyone, from corporations chasing compliance to individuals driven by passion, to achieve Net Zero through seamless, reliable digital solutions. We make sustainability easy, efficient, and failsafe, so you can accelerate responsible action and build a thriving future for people and planet.</p>
                    </div>
                    <div className="career-mission">
                        <h1>Our Mission</h1>
                        <p>Building a greener future isn't a solitary climb it's a global ascent. Carbon U Turn provides sturdy footing for companies, communities, and individuals on their upward journey. Together, we spark the flame of responsibility and igniting a collective movement towards a flourishing planet where all life can thrive.</p>
                    </div>
                </section>

                <h1 className="career-roles-heading">Open Positions</h1>
                <section className="career-roles">
                    {openPositions.map(position => <PositionCard role={position.role} location={position.location} link={position.url} />)}
                </section>

            </section>
            <Footer />
        </>
    )
}

export default Career
