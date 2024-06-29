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
            para: "Our marketplace serves as a hub for collaboration and balance. Within this ecosystem, carbon credit trading thrives as buyers and sellers engage in transactions, actively promoting carbon neutrality. Additionally, we foster community development by connecting stakeholders who share a commitment to Net-Zero goals.",
        },
        {
            id: 2,
            img: flipCard2,
            title: "Build Awareness",
            para: "We empower our clients by offering customized E-Learning modules. Our collaborative effort with IIT Roorkee combines an academic perspective from IIT with industry insights from Carbon U-turn. These modules cater to industry professionals, schools, and colleges, equipping learners with the knowledge and skills necessary to contribute to our mission of achieving Net-Zero. Whether it’s understanding sustainable practices or mastering carbon reduction strategies, our educational content covers it all.",
        },
        {
            id: 3,
            img: flipCard3,
            title: "Carbon Accounting & Dashboard",
            para: "Our carbon accounting dashboard serves as a powerful SaaS tool for tracking and reporting emissions. It caters to various segments: Enterprise organizations can closely monitor and manage their carbon footprint, analysing data at a granular level. MSMEs benefit from simplified tracking mechanisms, ensuring accurate measurement. Additionally, Retail/Individuals gain valuable insights into their environmental impact, facilitated by real-time data visualization and customizable reports.",
        },
        {
            id: 4,
            img: flipCard4,
            title: "Enabled registration",
            para: "Our approach to Certified Emission Reductions (CERs) prioritizes transparency and efficiency. The SaaS platform streamlines the entire process, starting with seamless project registration. Rigorous audits ensure compliance and accuracy throughout. Finally, certificates validating the impact of sustainable initiatives are promptly generated.",
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
