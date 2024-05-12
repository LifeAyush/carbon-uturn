import "./blogCards.css"
import Arrow from "../../../../Assets/Images/Arrow.svg"
import { Link } from "react-router-dom"

export default function BlogCards({ img, title, link }) {
    return (
        <a href={link} target="__blank">
            <section className="blog-card">
                <img className="blog-card-img" src={img} alt="" />
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
