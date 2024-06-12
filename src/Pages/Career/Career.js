import React from "react"
import "./career.css"
import Navbar from "../../Components/Navbar/Navbar"

const Career = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {

    }
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

                <form className="career-form" onSubmit={handleSubmit}>
                    <div>
                        <p>Your values align with our mission?</p>
                        <h1>Explore opportunities</h1>
                    </div>

                    <div className="career-form-section">
                        <h3>Experience</h3>
                        <div className="career-form-input-section">
                            <label>How many years of experience do you have in this particular field of work?</label>
                            <select name="experience" id="">
                                <option value="" selected disabled>Select a range</option>
                                <option value="less than 1yr">Less than 1 year</option>
                                <option value="1-2 yrs">1 - 2 years</option>
                                <option value="2-3 yrs">2 - 3 years</option>
                                <option value="3-4 yrs">3 - 4 years</option>
                                <option value="4-5 yrs">4 - 5 years</option>
                                <option value="more than 5yrs">More than 5 years</option>
                            </select>
                        </div>
                    </div>

                    <div className="career-form-section">
                        <h3>Academic Degree</h3>
                        <div className="career-form-input-section">
                            <label>What is your latest academic degree?</label>
                            <select name="degree" id="">
                                <option value="" selected disabled>Select a degree option</option>
                                <option value="Bachelors">Bachelors</option>
                                <option value="Masters">Masters</option>
                                <option value="PhD">PhD</option>
                                <option value="MBA">MBA</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="career-form-section">
                        <h3>Relocation</h3>
                        <div className="career-form-input-section">
                            <label>Are you willing to relocate to Gurgoan?</label>
                            <div className="career-radio-buttons">
                                <span><input type="radio" name="relocation" id="" value="yes" />Yes</span>
                                <span><input type="radio" name="relocation" id="" value="no" />No</span>
                            </div>
                        </div>
                    </div>

                    <div className="career-form-section">
                        <h3>Personal  Information</h3>

                        <div className="career-form-flex">
                            <div className="career-form-input-section">
                                <label>First Name</label>
                                <input type="text" name="firstName" placeholder="Enter your first name" />
                            </div>

                            <div className="career-form-input-section">
                                <label>Last Name</label>
                                <input type="text" name="lastName" placeholder="Enter your last name" />
                            </div>
                        </div>

                        <div className="career-form-flex">

                            <div className="career-form-input-section">
                                <label>Contact Number</label>
                                <input type="number" name="phone" placeholder="Enter your contact number" />
                            </div>

                            <div className="career-form-input-section">
                                <label>Email Address</label>
                                <input type="email" name="email" placeholder="Enter your email address" />
                            </div>

                        </div>

                        <div className="career-form-input-section">
                            <label>Upload CV</label>
                            <input type="file" name="cv" />
                        </div>

                        <div className="career-form-input-section">
                            <label>Cover Letter</label>
                            <textarea name="coverLetter" placeholder="Tell us about yourself" />
                        </div>

                    </div>

                    <button>Submit</button>
                </form>
            </section>
        </>
    )
}

export default Career
