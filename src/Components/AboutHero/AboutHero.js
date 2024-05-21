import React from "react"
import "./aboutHero.css"
import aboutHero1 from "../../Assets/Images/aboutHero1.png"
import aboutHero2 from "../../Assets/Images/aboutHero2.png"
import aboutHero3 from "../../Assets/Images/aboutHero3.png"
import aboutHero4 from "../../Assets/Images/aboutHero4.png"

const AboutHero = () => {
    return (
        <>
            <div className="about-hero">
                <div
                    className="about-hero-main about-hero-main-1"
                    style={{
                        backgroundImage: `linear-gradient(rgba(22,22,22,0), rgba(22,22,22,1)), url(${aboutHero1})`,
                    }}
                >
                    <div className="about-hero-text about-hero-text-1">
                        <div className="about-hero-main-title">ABOUT US</div>
                        <div className="about-hero-main-subtitle">
                            Our planet needs a U-Turn. We're the engineers, the
                            navigators, making that shift, a reality with
                            data-driven solutions.
                        </div>
                    </div>
                </div>
                <div
                    className="about-hero-main about-hero-main-2"
                    style={{
                        backgroundImage: `linear-gradient(rgba(22,22,22,0), rgba(22,22,22,1)), url(${aboutHero2})`,
                    }}
                >
                    <div className="about-hero-text about-hero-text-2">
                        <div className="about-hero-main-title">ABOUT US</div>
                        <div className="about-hero-main-subtitle">
                            With us, environmental action becomes a breeze –
                            like switching on a lightbulb, but for the planet.
                        </div>
                    </div>
                </div>
                <div
                    className="about-hero-main about-hero-main-3"
                    style={{
                        backgroundImage: `linear-gradient(rgba(22,22,22,0), rgba(22,22,22,1)), url(${aboutHero3})`,
                    }}
                >
                    <div className="about-hero-text about-hero-text-3">
                        <div className="about-hero-main-title">ABOUT US</div>
                        <div className="about-hero-main-subtitle">
                            Carbon Uturn: Where our founders’ vision is as
                            renewable as the energy we champion
                        </div>
                    </div>
                </div>
                <div
                    className="about-hero-main about-hero-main-4"
                    style={{
                        backgroundImage: `linear-gradient(rgba(22,22,22,0), rgba(22,22,22,1)), url(${aboutHero4})`,
                    }}
                >
                    <div className="about-hero-text about-hero-text-4">
                        <div className="about-hero-main-title">ABOUT US</div>
                        <div className="about-hero-main-subtitle">
                            Join the movement. Together, let's make a positive
                            impact. Your U-Turn starts here.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero
