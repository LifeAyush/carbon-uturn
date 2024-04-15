import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Services from "./Pages/Services/Services"
import Resources from "./Pages/Resources/Resources"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Careers from "./Pages/Career/Career"
import Partners from "./Pages/Partners/Partners"
import ComingSoon from "./Pages/ComingSoon/ComingSoon"

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/resources" element={<Resources />} />
                    <Route exact path="/about-us" element={<AboutUs />} />
                    <Route exact path="/partners" element={<ComingSoon />} />
                    <Route exact path="/careers" element={<ComingSoon />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
