import "./hero.css"

export default function Hero() {
    return (
        <section className="resources-hero">
            {/* <img className="resources-hero-img" src={resourcesimg} alt="" /> */}
            {/* <div className="resources-overlay"></div> */}
            <div></div>
            <div className="resources-content" data-aos="fade-up">
                <h1 className="resources-hero-heading">Get Expert Insights</h1>
                <p className="resources-hero-subheading">
                    Fuel your curiosity, ignite your passion. Dive into our
                    library
                </p>
            </div>
            <p className="resources-hero-para" data-aos="fade-up">
                Blogs | E-Learning Modules
            </p>
        </section>
    )
}
