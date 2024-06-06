import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Services from "./Pages/Services/Services"
import Resources from "./Pages/Resources/Resources"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Careers from "./Pages/Career/Career"
import Partners from "./Pages/Partners/Partners"
import ComingSoon from "./Pages/ComingSoon/ComingSoon"
import PartnerID from "./Pages/Partners/PartnerID/PartnerID"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Graph from "./Components/Graph/Graph"

function App() {
    AOS.init({
        duration: 750,
    })
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/resources" element={<Resources />} />
                <Route exact path="/about-us" element={<AboutUs />} />
                <Route exact path="/partners" element={<Partners />} />
                <Route exact path="/partners/:id" element={<PartnerID />} />
                <Route exact path="/careers" element={<ComingSoon />} />
                <Route exact path="/graph" element={<Graph />} />
            </Routes>
        </div>
    )
}

export default App
