import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Services from "./Pages/Services/Services"
import Resources from "./Pages/Resources/Resources"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Partners from "./Pages/Partners/Partners"
import PartnerID from "./Pages/Partners/PartnerID/PartnerID"
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Graph from "./Components/Graph/Graph"
import { GetStartedFormContext } from "./store/GetStartedFormContext"
import Career from "./Pages/Career/Career"
import emailjs from "@emailjs/browser"

function App() {
    AOS.init({
        duration: 750,
    })

    emailjs.init({
        publicKey: 'xMtPWbMY_J0oS1YfD',
        // Do not allow headless browsers
        blockHeadless: true,
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });

    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])


    const [getForm, setForm] = useState(false)

    return (
        <div className="App">
            <GetStartedFormContext.Provider value={{ getForm, setForm }}>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/resources" element={<Resources />} />
                    <Route exact path="/about-us" element={<AboutUs />} />
                    <Route exact path="/partners" element={<Partners />} />
                    <Route exact path="/partners/:id" element={<PartnerID />} />
                    <Route exact path="/careers" element={<Career />} />
                    <Route exact path="/graph" element={<Graph />} />
                </Routes>
            </GetStartedFormContext.Provider>
        </div>
    )
}

export default App
