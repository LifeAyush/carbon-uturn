import React from "react"
import "./mission.css"
import missionImg from "../../Assets/Images/missionImg.png"
import servicesBg from "../../Assets/Images/services-cards-bg.svg"

const Mission = () => {
    return (
        <div className="mission">
            <img src={servicesBg} alt="" />
            <div className="mission-img-container">
                <img src={missionImg} alt="Earth" className="mission-img" />
            </div>
            <div className="mission-flex" data-aos="fade-up">
                <div className="mission-title">OUR Mission</div>
                <div className="mission-hr" />
                <div className="mission-subtitle">
                    CUT empowers everyone, from corporations chasing compliance
                    to individuals driven by passion, to achieve Net Zero
                    through seamless, reliable digital solutions. We make
                    sustainability easy, efficient, and failsafe, so you can
                    accelerate responsible action and build a thriving future
                    for people and planet.
                </div>
            </div>
        </div>
    )
}

export default Mission
