import React, { useEffect, useState, useRef } from "react"
import Energy from "../../Assets/energy.mp4"
import Spiral from "../../Assets/spiral.mp4"
import Waves from "../../Assets/waves.mp4"
import "./hero.css"



const Hero = () => {

    const [design, setDesign] = useState(1)
    const videoRef = useRef()
    useEffect(() => {
        const currTime = new Date()
        const currHr = currTime.getHours() > 12 ? currTime.getHours() - 12 : currTime.getHours()
        if (currHr % 3 === 0) setDesign(1)
        else if (currHr % 3 === 1) setDesign(2)
        else setDesign(3)

        const video = videoRef.current;
        if (video) {
            video.play().catch(err => {
                console.error('Error trying to play video:', err);
            });
        }
    }, [])


    return (
        design !== null ?
            <div className="hero">
                <div id="hard-light"></div>
                <video ref={videoRef} autoPlay muted loop id="myVideo" src={
                    design === 1 ? Waves : design === 2 ? Waves : Spiral
                } typeof="video/mp4" />
                <div
                    className="hero-main-flex"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    style={design === 1 ? {} : design === 2 ? {} : {}}
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
                        One-stop-solution for Accelerating your Net-Zero Journey
                    </p>
                </div>
            </div> : <></>
    )
}

export default Hero
