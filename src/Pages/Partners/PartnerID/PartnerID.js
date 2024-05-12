import { useParams } from "react-router-dom"
import Navbar from "../../../Components/Navbar/Navbar"
import { partnersData } from "../partnersData"
import Footer from "../../../Components/Footer/Footer"
import "./partnerID.css"
import linkedin from "../../../Assets/Images/linkedin.png"
import globe from "../../../Assets/Images/globe.png"

export default function PartnerID() {
    const params = useParams()
    const data = partnersData.find((e) => e.id === params.id)
    console.log(data)
    return (
        <>
            <Navbar />
            <main className="partnerid-container">
                {data.img === "" ? (
                    <p>To Be Announced</p>
                ) : (
                    <>
                        <section className="partnerid-left">
                            <div>
                                <img src={data.img} alt="" />
                            </div>
                            <p>
                                Carbon Uturn & <br /> {data.name}
                                <hr />
                            </p>
                        </section>

                        <section className="partnerid-right">
                            <h1>Partner</h1>
                            <p>{data.intro}</p>
                            <br />
                            <p>{data.desc}</p>

                            <div className="partner-links">
                                <img src={globe} alt="" />
                                <div>
                                    <p>Website</p>
                                    <a href={data.website}>{data.website}</a>
                                </div>
                            </div>

                            <div className="partner-links">
                                <img src={linkedin} alt="" />
                                <div>
                                    <p>Linkedin Profile</p>
                                    <a href={data.linkedin}>{data.linkedin}</a>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </main>
            <Footer />
        </>
    )
}
