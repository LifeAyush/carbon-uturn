import React, { useEffect, useRef } from "react"
import "./journey.css"
import JourneySlider from "./JourneySlider"

const Journey = () => {
    const cont = useRef(null)
    useEffect(() => {
        const slider = document.querySelectorAll(".journey-slider")[0]
        const cards = document.querySelectorAll(".journey-card")
        //console.log(slider)
        const custom = (e) => {
            transform(cont.current)
        }
        const transform = (elem) => {
            const offset = elem.parentElement.offsetTop
            //console.log(offset);
            let percentage =
                ((window.scrollY - offset) / window.innerHeight) * 100
            // console.log((window.innerWidth - coord.x) / window.innerHeight)
            cards.forEach((e) => {
                let coords = e.getBoundingClientRect()
                let calculate =
                    (window.innerWidth - coords.x) / window.innerHeight + 0.2

                if (window.innerWidth < 900) {
                    calculate =
                        (window.innerWidth - coords.x) / window.innerHeight +
                        0.6
                }
                e.style.scale = calculate > 1 ? 1 : calculate
            })
            slider.style.transform = `translate3d(${-percentage + 40}vw, 0, 0)`
            if (window.innerWidth <= 900) {
                slider.style.transform = `translate3d(${
                    -percentage + 150
                }vw, 0, 0)`
            }
        }
        window.addEventListener("scroll", custom)

        return () => {
            window.removeEventListener("scroll", custom)
        }
    }, [])
    return (
        <div className="journey" id="next-section">
            <section
                className="journey-slider-container"
                ref={cont}
                id="animation-anchor"
            >
                <div
                    className="journey-content"
                    // data-aos-anchor="#animation-anchor"
                >
                    <span
                        className="journey-content-subtitle"
                        data-aos="fade-up"
                    >
                        Your U-turn to
                    </span>
                    <span className="journey-content-title" data-aos="fade-up">
                        Net Zero Journey
                    </span>
                </div>
                <JourneySlider />
            </section>
        </div>
    )
}

export default Journey
