import { useState } from "react"
import { send } from "@emailjs/browser"
import "./careerform.css"
import { openPositions } from "../Career/openPositions"
import { useParams } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

export default function CareerForm() {
    const params = useParams()
    const { role, jobDescription, qualifications, responsibilities } = openPositions.find(e => e.url === params.id)

    const [data, setData] = useState({
        experience: "",
        degree: "",
        relocation: "",
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        coverLetter: "",
        role: "",
        resume: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        const { experience, degree, relocation, firstName, lastName, contact, email, coverLetter, resume } = data
        if (experience.trim().length === 0 || degree.trim().length === 0 || relocation.trim().length === 0 || firstName.trim().length === 0 || contact.trim().length === 0 || email.trim().length === 0 || coverLetter.trim().length === 0 || resume.trim().length === 0) {
            alert("Kindly fill all the details")
            return
        }
        send(
            "service_sdsp8em",
            "template_p9vyz6h",
            {
                experience: experience,
                degree: degree,
                relocation: relocation,
                contact: contact,
                from_email: email,
                coverLetter: coverLetter,
                from_name: `${firstName} ${lastName}`,
                role: role,
                resume: resume
            }
        ).then(res => {
            if (res.status === 200) {
                alert("Will get back to you!")
            } else {
                throw new Error("Something went wrong")
            }
        }).catch(err => {
            alert("Something went wrong")
            console.log(err)
        })

    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Navbar />
            <form className="career-form" onSubmit={handleSubmit}>

                <h1 className="career-role-heading">{role}</h1>
                <p className="career-job-description">{jobDescription}</p>
                <h2>Qualifications</h2>
                <ul>
                    {
                        qualifications.map(q =>
                            (typeof q === 'object') ?
                                <>
                                    <li style={{ marginBottom: "20px" }}><span style={{ fontWeight: "bold" }}>{q.heading}: </span>{q.description}</li>
                                </>
                                : <li>{q}</li>
                        )}
                </ul>

                <h2>Key Responsibilities</h2>
                <ul>
                    {
                        responsibilities.map(q =>
                            (typeof q === 'object') ?
                                <>
                                    <li style={{ marginBottom: "20px" }}>
                                        <span style={{ fontWeight: "bold" }}>{q.heading}</span>
                                        <ul>
                                            {q.subPoints?.map(s => <li style={{ marginLeft: "20px" }}>{s}</li>)}
                                        </ul>
                                    </li>
                                </>
                                : <li>{q}</li>
                        )}
                </ul>
                <div>
                    <h1>Explore opportunities</h1>
                </div>

                <div className="career-form-section">
                    <h3>Experience</h3>
                    <div className="career-form-input-section">
                        <label>How many years of experience do you have in this particular field of work?</label>
                        <select name="experience" id="" onChange={handleChange}>
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
                        <select name="degree" id="" onChange={handleChange}>
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
                        <label>Are you willing to relocate to Gurugram (Gurgaon)?</label>
                        <div className="career-radio-buttons">
                            <span><input type="radio" name="relocation" onChange={handleChange} value="yes" />Yes</span>
                            <span><input type="radio" name="relocation" onChange={handleChange} value="no" />No</span>
                        </div>
                    </div>
                </div>

                <div className="career-form-section">
                    <h3>Personal  Information</h3>

                    <div className="career-form-flex">
                        <div className="career-form-input-section">
                            <label>First Name</label>
                            <input type="text" name="firstName" onChange={handleChange} placeholder="Enter your first name" />
                        </div>

                        <div className="career-form-input-section">
                            <label>Last Name</label>
                            <input type="text" name="lastName" onChange={handleChange} placeholder="Enter your last name" />
                        </div>
                    </div>

                    <div className="career-form-flex">

                        <div className="career-form-input-section">
                            <label>Contact Number</label>
                            <input type="number" name="contact" onChange={handleChange} placeholder="Enter your contact number" />
                        </div>

                        <div className="career-form-input-section">
                            <label>Email Address</label>
                            <input type="email" name="email" onChange={handleChange} placeholder="Enter your email address" />
                        </div>

                    </div>

                    <div className="career-form-input-section">
                        <label>Link to Resume</label>
                        <input type="text" name="resume" onChange={handleChange} placeholder="Attach link to your resume." />
                    </div>

                    <div className="career-form-input-section">
                        <label>Cover Letter</label>
                        <textarea name="coverLetter" onChange={handleChange} placeholder="Tell us about yourself" />
                    </div>

                </div>

                <button>Submit</button>
            </form >

            <Footer />
        </>
    )
}