import React, { useState } from "react"
import "./stats.css"
import stats2 from "../../Assets/Images/stats-2.svg"
import stats1 from "../../Assets/Images/stats-1.svg"
import stats3 from "../../Assets/Images/stats-3.svg"
import stats4 from "../../Assets/Images/stats-4.svg"
import stats5 from "../../Assets/Images/stats-5.svg"
import bg from "../../Assets/Images/statsbg.png"
import AnimatedNumber from "animated-number-react"
import ScrollTrigger from "react-scroll-trigger"

const Stats = () => {
    const format = (e) => {
        return e.toFixed(1)
    }

    const [inView, setInView] = useState(false)

    return (
        <>
            <div
                className="stats-main"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: "0 5vw 5vh 5vw",
                }}
            >
                <h1 className="heading-stats">
                    We are committed to mitigating
                </h1>
                <div className="card-grid">
                    <div className="scard">
                        <ScrollTrigger
                            onEnter={() => setInView(true)}
                            onExit={() => setInView(false)}
                        >
                            <img
                                className={`scard-img ${
                                    inView && "full-opacity"
                                }`}
                                alt=""
                                src={stats1}
                            />
                            {inView ? (
                                <h1 className="scard-header-title">
                                    <AnimatedNumber
                                        delay={300}
                                        value={0.5}
                                        formatValue={format}
                                    />{" "}
                                    -{" "}
                                    <AnimatedNumber
                                        delay={300}
                                        value={1}
                                        formatValue={format}
                                    />{" "}
                                    m
                                </h1>
                            ) : (
                                <h1 className="scard-header-title">
                                    0.5 - 1 m
                                </h1>
                            )}
                        </ScrollTrigger>
                        <p className="scard-header-val">
                            Rise in global sea level
                        </p>
                    </div>{" "}
                    <div className="scard">
                        <img
                            className={`scard-img ${inView && "full-opacity"}`}
                            alt=""
                            src={stats2}
                        />
                        {inView ? (
                            <h1 className="scard-header-title">
                                $
                                <AnimatedNumber
                                    delay={300}
                                    value={1.6}
                                    formatValue={format}
                                />{" "}
                                trillion
                            </h1>
                        ) : (
                            <h1 className="scard-header-title">
                                $1.6 trillion
                            </h1>
                        )}

                        <p className="scard-header-val">
                            Damage by river flooding
                        </p>
                    </div>{" "}
                    <div className="scard">
                        <img
                            className={`scard-img ${inView && "full-opacity"}`}
                            alt=""
                            src={stats3}
                        />
                        {inView ? (
                            <h1 className="scard-header-title">
                                <AnimatedNumber
                                    delay={300}
                                    value={50}
                                    formatValue={(e) => e.toFixed(0)}
                                />
                                %
                            </h1>
                        ) : (
                            <h1 className="scard-header-title">50%</h1>
                        )}
                        <p className="scard-header-val">
                            Increase in CO2 emissions
                        </p>
                    </div>{" "}
                    <div className="scard">
                        <img
                            className={`scard-img ${inView && "full-opacity"}`}
                            alt=""
                            src={stats4}
                        />
                        {inView ? (
                            <h1 className="scard-header-title">
                                <AnimatedNumber
                                    delay={300}
                                    value={15}
                                    formatValue={(e) => e.toFixed(0)}
                                />
                                x
                            </h1>
                        ) : (
                            <h1 className="scard-header-title">15x</h1>
                        )}
                        <p className="scard-header-val">
                            Increase in death rate due to extreme weather events
                        </p>
                    </div>{" "}
                    <div className="scard">
                        <img
                            className={`scard-img ${inView && "full-opacity"}`}
                            alt=""
                            src={stats5}
                        />
                        {inView ? (
                            <h1 className="scard-header-title">
                                {" "}
                                <AnimatedNumber
                                    delay={300}
                                    value={1.5}
                                    formatValue={format}
                                />
                                -{" "}
                                <AnimatedNumber
                                    delay={300}
                                    value={2}
                                    formatValue={format}
                                />{" "}
                                °C
                            </h1>
                        ) : (
                            <h1 className="scard-header-title">1.5 - 2.0°C</h1>
                        )}
                        <p className="scard-header-val">
                            Rise in temperature as early as 2030
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats
