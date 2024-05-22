import Card from "./Card"
import "./cards.css"
import { data } from "./cardDetails"

export default function CardsSection() {
    return (
        <section className="services-cards-section">
            <p className="services-cards-para">What do we offer</p>
            {data.map((obj, index) => (
                <Card key={index} index={index} obj={obj} />
            ))}
        </section>
    )
}
