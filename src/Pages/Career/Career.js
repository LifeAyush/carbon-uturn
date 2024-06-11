import React from "react"
import "./career.css"
import Navbar from "../../Components/Navbar/Navbar"

const Career = () => {
    return (
        <>
            <Navbar />
            <section className="career-page">
                <section className="career-text-content">
                    <div className="career-vision">
                        <h1>Our Vision</h1>
                        <p>Building a greener future isn't a solitary climb it's a global ascent. Carbon U Turn provides sturdy footing for  companies, communities, and individuals on their upward journey. Together, we spark the flame of responsibility and igniting a collective movement towards a flourishing planet where all life can thrive.</p>
                    </div>
                    <div className="career-mission">
                        <h1>Our Mission</h1>
                        <p>Building a greener future isn't a solitary climb it's a global ascent. Carbon U Turn provides sturdy footing for  companies, communities, and individuals on their upward journey. Together, we spark the flame of responsibility and igniting a collective movement towards a flourishing planet where all life can thrive.</p>
                    </div>
                </section>

                <form className="career-form">
                    <div>
                        <p>Your values align with our mission?</p>
                        <h1>Explore opportunities</h1>
                    </div>

                    <div className="career-form-section">
                        <h3>Experience</h3>
                        <div className="career-form-input-section">
                            <label>How many years of experience do you have in this particular field of work?</label>
                            <select name="" id="">
                                <option value="">0-2</option>
                                <option value="">2-5</option>
                                <option value="">5+</option>
                            </select>
                        </div>
                    </div>

                    <div className="career-form-section">
                        <h3>Academic Degree</h3>
                        <div className="career-form-input-section">
                            <label>What is your latest academic degree?</label>
                            <select name="" id="">
                                <option value="">0-2</option>
                                <option value="">2-5</option>
                                <option value="">5+</option>
                            </select>
                        </div>
                    </div>

                    <div className="career-form-section">
                        <h3>Relocation</h3>
                        <div className="career-form-input-section">
                            <label>Are you willing to relocate to Gurgoan?</label>
                            <div className="career-radio-buttons">
                                <span><input type="radio" name="relocation" id="" /> Yes</span>
                                <span><input type="radio" name="relocation" id="" /> No</span>
                            </div>
                        </div>
                    </div>

                    <div className="career-form-section">
                        <h3>Personal  Information</h3>

                        <div className="career-form-flex">
                            <div className="career-form-input-section">
                                <label>First Name</label>
                                <input type="text" />
                            </div>

                            <div className="career-form-input-section">
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="career-form-flex">

                            <div className="career-form-input-section">
                                <label>Contact Number</label>
                                <input type="text" />
                            </div>

                            <div className="career-form-input-section">
                                <label>Email Address</label>
                                <input type="text" />
                            </div>

                        </div>

                        <div className="career-form-input-section">
                            <label>Upload CV</label>
                            <input type="text" />
                        </div>

                        <div className="career-form-input-section">
                            <label>Cover Letter</label>
                            <input type="text" />
                        </div>

                    </div>

                </form>
            </section>
        </>
    )
}

export default Career
