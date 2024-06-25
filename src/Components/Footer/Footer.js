import React from "react"
import "./footer.css"
import footerlogo from "../../Assets/Images/footerlogo.svg"
import bg from "../../Assets/Images/Ftimg.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div
            className="footer"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="footerlogoaddress">
                <img
                    className="footerlogo"
                    src={footerlogo}
                    alt="Carbon UTurn"
                ></img>
                <div className="footeraddress">
                    Gurgaon, India - 122009 <br></br> +91 99999 89500
                </div>
            </div>
            <div className="footercontent">
                <div className="footerfirstline">
                    {/* <h1 className="footerheading">Subscribe Newsletter!</h1> */}
                    {/* <input
            className="footeremail"
            type="email"
            placeholder="Enter Your Email"
          ></input> */}
                </div>
                <div className="footersecondline">
                    <div className="footerlist">
                        <div>
                            <h2>
                                <Link to={"/services"}>Services</Link>
                            </h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href={"/services#Carbon"}>
                                        Carbon Credit Marketplace
                                    </a>
                                </li>
                                <li>
                                    <a href={"/services#Building"}>
                                        Building Awareness
                                    </a>
                                </li>
                                <li>
                                    <a href={"/services#Professional"}>
                                        Professional Advisory
                                    </a>
                                </li>
                                <li>
                                    <a href={"/services#Trusted"}>
                                        Trusted Registration
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerlist">
                        <h2>Company</h2>
                        <ul>
                            <li>
                                <Link to="/about-us">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerlist">
                        <h2><Link to="/careers">Careers</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
