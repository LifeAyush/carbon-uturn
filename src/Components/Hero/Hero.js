import React from "react"
import "./hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div
                className="hero-main-flex"
                data-aos="fade-up"
                data-aos-duration={1000}
            >
                <h1 className="hero-head">
                    <strong
                        style={{
                            color: "#858585",
                            fontFamily: "Florencesans-Black",
                        }}
                    >
                        Zero IN,
                    </strong>{" "}
                    Planet WIns
                </h1>
                <p className="hero-para">
                    We guide our partners towards net zero emissions, making
                    every footprint count for a cleaner, brighter business
                    landscape.
                </p>
            </div>
        </div>
    )
}

export default Hero
