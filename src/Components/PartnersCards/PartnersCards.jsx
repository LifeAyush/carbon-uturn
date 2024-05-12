import { Link } from "react-router-dom"
import "./partnersCards.css"

export default function PartnersCards({ id, img }) {
    return (
        <Link to={id}>
            <div className="partner-card">
                {img !== "" ? <img src={img} alt="" /> : <p>To Be Announced</p>}
            </div>
        </Link>
    )
}
