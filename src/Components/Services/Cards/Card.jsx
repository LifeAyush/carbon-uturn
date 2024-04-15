import img from "../../../Assets/Images/services-cards-bg.svg"

export default function Card({ index, obj }) {
    return (
        <section
            className={`services-card-container ${
                index % 2 === 1 && "cont-opp"
            }`}
        >
            <div>
                <p className="services-card-num">{obj.id}</p>
                <section
                    className={`services-card ${index % 2 === 1 && "flex-opp"}`}
                >
                    <img src={obj.img} alt="" />
                    <div className="services-card-content">
                        <h1 className="services-card-head">{obj.head}</h1>
                        <p className="services-card-para">{obj.content}</p>
                    </div>
                </section>
            </div>
            <img className="services-card-container-bg" src={img} alt="" />
        </section>
    )
}
