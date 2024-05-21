import React from "react"
import "./partners.css"
import Navbar from "../../Components/Navbar/Navbar"
import { partnersData } from "./partnersData"
import PartnersCards from "../../Components/PartnersCards/PartnersCards"
import Footer from "../../Components/Footer/Footer"

const Partners = () => {
    return (
        <>
            <Navbar />
            <section className="partners-hero">
                <div className="partners-content">
                    <h1>Our Partners</h1>
                    <p>
                        Our planet needs a U-Turn. We're the engineers, the
                        navigators, making that shift, a reality with
                        data-driven solutions.
                    </p>
                </div>
            </section>
            <section className="partners-welcome">
                <p>
                    Carbon U-turn Technology Pvt. Ltd. (CUT) welcomes
                    partnerships to build a stronger ecosystem and accelerate
                    the journey to Net Zero.
                </p>
            </section>
            <section className="partners-cards-container">
                <h1>All Partners</h1>
                <div className="partners-cards">
                    {window.innerWidth < 900
                        ? partnersData.map(
                              (partner) =>
                                  partner.name && (
                                      <PartnersCards
                                          id={partner.id}
                                          img={partner.img}
                                      />
                                  )
                          )
                        : partnersData.map((e) => (
                              <PartnersCards id={e.id} img={e.img} />
                          ))}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Partners
