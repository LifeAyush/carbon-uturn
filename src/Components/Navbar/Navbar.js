import React, { useState, useEffect, useContext } from "react"
import "./navbar.css"
import logo from "../../Assets/Images/logo.svg"
import close from "../../Assets/Images/close.png"
import hamburg from "../../Assets/Images/hamburg.png"
import { NavLink, Link, useLocation } from "react-router-dom"
import GetStartedForm from "../GetStartedForm/GetStartedForm"
import { GetStartedFormContext } from "../../store/GetStartedFormContext"

const Navbar = () => {
    const [active, setActive] = useState("Home")
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [mobileNav, setMobileNav] = useState(false)
    const location = useLocation()
    useEffect(() => {
        setActive(location.pathname)
    }, [location.pathname])

    const { getForm, setForm } = useContext(GetStartedFormContext)

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset

        setVisible(prevScrollPos > currentScrollPos && currentScrollPos > 100)
        if (currentScrollPos === 0) setVisible(true)
        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [prevScrollPos, visible])

    //console.log(visible);
    const navItems = [
        {
            id: 0,
            name: "Home",
            url: "/",
        },
        {
            id: 1,
            name: "Services",
            url: "/services",
        },
        {
            id: 2,
            name: "Resources",
            url: "/resources",
        },
        {
            id: 3,
            name: "About Us",
            url: "/about-us",
        },
        {
            id: 4,
            name: "Partners",
            url: "/partners",
        },
        {
            id: 5,
            name: "Careers",
            url: "/careers",
        },
    ]
    return (
        <>
            <div className="mobile-view">
                <img
                    src={logo}
                    alt="mobile-company-logo"
                    style={{ width: "30vw" }}
                />
                <img
                    src={hamburg}
                    alt="mobile-nav-icon"
                    onClick={() => setMobileNav(true)}
                />

                <section
                    className="nav-slider"
                    style={{ top: `${mobileNav ? "0" : "-100vh"}` }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <img
                            src={logo}
                            alt="mobile-company-logo"
                            style={{ width: "30vw" }}
                        />
                        <img
                            src={close}
                            alt="mobile-nav-icon"
                            style={{ width: "32px" }}
                            onClick={() => setMobileNav(false)}
                        />
                    </div>

                    <div className="mobile-nav-links">
                        {navItems.map((item) => {
                            return (
                                <Link
                                    to={item.url}
                                    key={item.id}
                                    className={
                                        active === item.url
                                            ? "nav-item-active"
                                            : "nav-item"
                                    }
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </section>
            </div>

            {getForm && <GetStartedForm />}

            <div className={visible ? "nav" : "nav-inv"}>
                <Link to="/">
                    <img src={logo} alt="Carbon UTurn" className="nav-logo" />
                </Link>
                <div className="nav-controls">
                    {navItems.map((item) => {
                        return (
                            <NavLink
                                to={item.url}
                                key={item.id}
                                className={
                                    active === item.url
                                        ? "nav-item-active"
                                        : "nav-item"
                                }
                            >
                                {item.name}
                            </NavLink>
                        )
                    })}
                </div>
                <div className="balancing-div">
                    {/* <a href="#next-section"> */}
                    <div onClick={() => setForm(true)} className="nav-cta">
                        Get Started
                    </div>
                    {/* </a> */}
                </div>
            </div>
        </>
    )
}

export default Navbar
