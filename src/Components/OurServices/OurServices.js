import React from "react"
import { Link } from "react-router-dom"
import "./ourServices.css"
import OurServicesCard from "./OurServicesCard"
import flipCard1 from "../../Assets/Images/flipCard1.png"
import flipCard2 from "../../Assets/Images/flipCard2.png"
import flipCard3 from "../../Assets/Images/flipCard3.png"
import flipCard4 from "../../Assets/Images/flipCard4.png"

const OurServices = () => {
    const cardData = [
        {
            id: 1,
            img: flipCard1,
            title: "Carbon Credit Marketplace",
            para: "CUT seamlessly connects issuers, buyers, and sellers in a vibrant marketplace, unlocking the full potential of carbon credits for a greener tomorrow.",
        },
        {
            id: 2,
            img: flipCard2,
            title: "Build Awareness",
            para: "From immersive physical workshops to user-friendly eLearning modules, we deliver impactful sustainability education across all learning styles.",
        },
        {
            id: 3,
            img: flipCard3,
            title: "Carbon Accounting & Dashboard",
            para: "Our dashboard tracks your carbon footprint, and our experts ensure your projects meet greenhouse standards, paving the way for lasting impact.",
        },
        {
            id: 4,
            img: flipCard4,
            title: "Enabled registration",
            para: "Offer comprehensive audit and due diligence to guarantee your projects' compliance with established greenhouse gas protocols.",
        },
    ]
    return (
        <div className="our-services">
            <div className="our-services-content" data-aos="fade-up">
                <Link to="/services">
                    <h1 className="our-sevices-title">Our Services</h1>
                </Link>
                <div className="our-services-cards">
                    {cardData.map((item) => {
                        return <OurServicesCard data={item} key={item.id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurServices
