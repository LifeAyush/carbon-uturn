import React from "react"
import "../Mission/mission.css"
import visionImg from "../../Assets/Images/visionImg.png"
import servicesBg from "../../Assets/Images/services-cards-bg.svg"

const Vision = () => {
    return (
        <div className="vision">
            <img src={servicesBg} alt="" />
            <div className="vision-img-container">
                <img src={visionImg} alt="Earth" className="vision-img" />
            </div>
            <div className="mission-flex">
                <div className="mission-title">OUR vision</div>
                <div className="mission-hr" />
                <div className="mission-subtitle">
                    Building a greener future isn't a solitary climb it's a
                    global ascent. Carbon U Turn provides sturdy footing for
                    companies, communities, and individuals on their upward
                    journey. Together, we spark the flame of responsibility and
                    igniting a collective movement towards a flourishing planet
                    where all life can thrive.
                </div>
            </div>
        </div>
    )
}

export default Vision
