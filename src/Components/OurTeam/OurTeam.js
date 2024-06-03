import React, { useRef } from "react"
import "./ourTeam.css"
import TeamCard from "./TeamCard"
import arrow from "../../Assets/Images/aboutArrow.png"

const OurTeam = () => {
    const scrollContainer = useRef()

    const scrollLeft = () => {
        scrollContainer.current.scrollLeft -= "300"
    }

    const scrollRight = () => {
        scrollContainer.current.scrollLeft += "300"
    }

    const teamData = [
        {
            id: 1,
            image: "/Images/Team/team1.png",
            name: "Vineet Sagar",
            title1: "Co-Founder",
            title2: "CEO",
            vertical: "Operations",
            para: "Vineet Sagar, a Chemical Engineer from Panjab University graduating in 1980, boasts a rich professional background with nearly three decades at ExxonMobil (1995-2023) and over 15 years at Indian Oil (1982-1995), including experience in the fertilizer industry. His expertise spans global oil and gas, demonstrated through roles such as Commercial Advisor in Mobil Oil Producing, Nigeria, and LNG Lifting Manager in Perth, Australia. In 2023, he retired as the LNG Market Development Advisor at ExxonMobil.",
            links: {
                linkedin: "https://www.linkedin.com/in/vineet-sagar-37a090b8/",
                mail: "mailto:vs@carbon-ut.com",
            },
        },
        {
            id: 2,
            image: "/Images/Team/team2.png",
            name: "Mr. PK Sinha",
            title1: "Board Chairman",
            title2: "Non-Executive Director",
            vertical: "Governance and Policy",
            para: "He is a former top-ranking civil servant with over 44 years of service. With expertise in Energy, Infrastructure, Transport, Urban Development, and Finance, he served as India's Cabinet Secretary and held key positions in the Power and Oil & Gas Ministries. He also Chairs the Indian Advisory Board of Global Energy Alliance for People And Planet As an Independent Director, he brings extensive corporate governance experience, having served on the boards of major Public Sector Undertakings such as ONGC, IOCL, HPCL, BPCL, and Bharti Airtel Ltd.",
            links: {
                mail: "mailto:pk@carbon-ut.com",
            },
        },
        {
            id: 3,
            image: "/Images/Team/team3.png",
            name: "Rakesh Sarin",
            title1: "Co-Founder",
            title2: "Director",
            vertical: "Strategy",
            para: "Rakesh Sarin, a visionary Co-founder & Director, led multi-billion-dollar corporations globally, including roles at Wartsila Corporation and Suzlon Energy. He served in pivotal roles at Indian Oil Corporation and Caltex, consulted for major companies and funds, and successfully launched SaaS startups WellM and JOP Inc. With 3+ years in these ventures, he's fully focused on the CUT project, bringing his distinguished expertise as an alumnus of IIT BHU and Oxford University.",
            links: {
                linkedin: "https://www.linkedin.com/in/rakeshsarin/",
                mail: "mailto:rs@carbon-ut.com",
            },
        },
        {
            id: 4,
            image: "/Images/Team/team4.png",
            name: "Dr. RK Malhotra",
            title1: "Co-Founder",
            title2: "Director",
            vertical: "Market & Collabs",
            para: " R.K. Malhotra, brings 45 years of oil & gas expertise, with 37 years at IOC R&D. A pioneer in Bio-fuels & Hydrogen since 2005, he retired as Chairman & Director of R&D in 2014, later serving as DG, of FIPI for 6 years. Passionate about Hydrogen and decarbonization, he holds key roles in organizations like the Hydrogen Association of India and CPCB. Dr. Malhotra, a decorated professional, is a Professor of Practice (adjunct) at IIT Delhi.",
            links: {
                linkedin:
                    "https://www.linkedin.com/in/dr-r-k-malhotra-3b83bb16/",
                mail: "mailto:rkm@carbon-ut.com",
            },
        },
        {
            id: 5,
            image: "/Images/Team/team5.png",
            name: "Prof. KK Pant",
            title1: "Advisory Board",
            title2: "",
            vertical: "Advisor",
            para: "Professor K. K. Pant, currently the Director at IIT Roorkee, is a distinguished academician with over 30 years of research experience in chemical engineering. He is recognized globally and focuses on cutting-edge technologies such as coal-to-methanol conversion, e-waste management, and biomass valorization. With numerous awards, fellowships, and a notable position in scientific committees, Prof Pant's outstanding contributions include over 240 papers, 13,361 citations, and recognition as one of the top 2% of scientists in the field by Stanford University.",
            links: {
                linkedin: "https://www.linkedin.com/in/k-k-pant-b1b31815/",
                mail: "mailto:director@iitr.ac.in",
            },
        },
    ]
    return (
        <div className="our-team">
            <div className="our-team-text-flex" data-aos="fade-up">
                <div className="ott-title">OUR TEam</div>
                <div className="ott-hr" />
                <div className="ott-subtitle">
                    Meet the minds behind the movement for a sustainable future.
                    Our passionate team founders with collaborating Advisory
                    board Members bring decades of experience to drive positive
                    change.
                </div>
            </div>
            <div className="team-flex-cont">
                <img
                    className="about-arrow about-arrow"
                    onClick={scrollLeft}
                    src={arrow}
                    alt=""
                />
                <div className="team-flex" ref={scrollContainer}>
                    {teamData.map((data) => {
                        return <TeamCard data={data} key={data.id} />
                    })}
                </div>
                <img
                    className="about-arrow right"
                    onClick={scrollRight}
                    src={arrow}
                    alt=""
                />
            </div>
        </div>
    )
}

export default OurTeam
