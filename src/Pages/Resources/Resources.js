import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import "./resources.css"
import Hero from "../../Components/Resources/Hero/Hero"
import Blogs from "../../Components/Resources/Blogs/Blogs.jsx"
import Modules from "../../Components/Resources/Modules/Modules.js"
import Footer from "../../Components/Footer/Footer.js"

const Resources = () => {
    return (
        <>
            <Navbar />
            <main className="resources-main">
                <Hero />
                <Blogs />
                <Modules />
            </main>
            <Footer />
        </>
    )
}

export default Resources
