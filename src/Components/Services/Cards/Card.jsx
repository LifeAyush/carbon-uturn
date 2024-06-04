import { useState } from "react"
import img from "../../../Assets/Images/services-cards-bg.svg"

export default function Card({ index, obj }) {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
            {isExpanded && window.innerWidth < 900 && (
                <div
                    className="coverBlack"
                    onClick={() => setIsExpanded(false)}
                ></div>
            )}
            <section
                className={`services-card-container ${
                    index % 2 === 1 && "cont-opp"
                } ${isExpanded && "increase-z-index"}`}
                id={obj.head.split(" ")[0]}
            >
                <div>
                    <p className="services-card-num">{obj.id}</p>
                    <section
                        className={`services-card ${
                            index % 2 === 1 && "flex-opp"
                        } ${isExpanded && "expanded-services-card"}`}
                        onClick={() =>
                            isExpanded
                                ? setIsExpanded(false)
                                : setIsExpanded(true)
                        }
                        data-aos="fade-up"
                    >
                        <img src={obj.img} alt="" />
                        <div className="services-card-content">
                            <h1 className="services-card-head">{obj.head}</h1>
                            <p className="services-card-para">
                                {window.innerWidth < 900
                                    ? isExpanded
                                        ? obj.content
                                        : obj.smallContent
                                    : obj.content}
                            </p>
                        </div>
                    </section>
                </div>
                <img className="services-card-container-bg" src={img} alt="" />
            </section>
        </>
    )
}
