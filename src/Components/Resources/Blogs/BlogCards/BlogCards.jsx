import "./blogCards.css"
import Arrow from "../../../../Assets/Images/Arrow.svg"
import defaultimg from "../../../../Assets/Images/aboutHeroBg.png"
import { Link } from "react-router-dom"

export default function BlogCards({ img, title, link }) {
    return (
        <a href={link} target="__blank">
            <section className="blog-card">
                <img
                    className="blog-card-img"
                    src={
                        img ===
                        "https://placehold.jp/bdbdc2/ffffff/250x250.png?text=No%20image"
                            ? defaultimg
                            : img
                    }
                    alt=""
                />
                <div className="blog-card-arrow">
                    <img src={Arrow} alt="" />
                </div>
                <div className="blog-card-content">
                    <p className="blog-card-head">{title}</p>
                </div>
            </section>
        </a>
    )
}
