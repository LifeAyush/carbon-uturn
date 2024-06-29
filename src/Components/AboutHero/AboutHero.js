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
                            At Carbon Uturn, our passion drives us to create positive environmental impact. We’re committed to addressing climate challenges.
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
                            Our platform seamlessly combines carbon credit marketplace, e-learning modules, and GHG emissions calculations. It’s a one-stop solution for achieving net zero.
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
                            Carbon Uturn pioneers token generation for renewable projects using blockchain technology. Transparency and accountability are our hallmarks.
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
                            Join us in our mission! By choosing Carbon Uturn, you’re part of a global effort toward a greener, more sustainable future.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero
