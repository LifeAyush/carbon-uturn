import { useContext, useEffect, useState } from "react"
import "./getStartedForm.css"
import { GetStartedFormContext } from "../../store/GetStartedFormContext"
import blackClose from "../../Assets/Images/close-black.svg"
import whiteClose from "../../Assets/Images/close.png"
import { send } from "@emailjs/browser"

export default function GetStartedForm() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
        contact: ""
    })

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        const { firstName, lastName, email, company, message, contact } = data
        if (firstName.trim().length === 0 || email.trim().length === 0 || company.trim().length === 0 || message.trim().length === 0 || contact.trim().length === 0) {
            alert("Kindly fill all details")
            return
        }
        try {
            send(
                "service_up3z1fp",
                "template_eyj1d2u",
                {
                    from_name: `${firstName} ${lastName}`,
                    email: email,
                    company: company,
                    message: message,
                    contact: contact
                }
            ).then(res => {
                if (res.status === 200) {
                    alert("The request has been registered & we will revert to you within 24 working hours.")
                    setForm(false)
                } else {
                    throw new Error("Something went wrong")
                }
            })
        } catch (err) {
            console.log(err)
            alert("Something went wrong. Try Later")
        }
    }
    const { getForm, setForm } = useContext(GetStartedFormContext)

    useEffect(() => {
        if (getForm) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [getForm])

    return (
        <main className="getStarted-overlay">
            <section className="getStarted-container">
                <img src={window.innerWidth > 900 ? blackClose : whiteClose} alt="" className="getStarted-close" onClick={() => setForm(false)} />
                <section className="getStarted-left">
                    <h1>Contact our sustainability experts</h1>
                    <p>
                        Take the first step towards a sustainable future.
                        Register yourself with us and discover how our digital
                        solutions can simplify your path to Net Zero.
                    </p>
                </section>
                <form className="getStarted-form" onSubmit={handleSubmit}>
                    <div className="getStarted-form-flex">
                        <div className="getStarted-form-field">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name" onChange={onChange}
                            />
                        </div>
                        <div className="getStarted-form-field">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter your last name" onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="getStarted-form-flex">
                        <div className="getStarted-form-field">
                            <label>Contact Number</label>
                            <input
                                type="text"
                                name="contact"
                                placeholder="+91 | Enter your contact" onChange={onChange}
                            />
                        </div>
                        <div className="getStarted-form-field">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email" onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="getStarted-form-field">
                        <label>Company Name</label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Enter your company name" onChange={onChange}
                        />
                    </div>
                    <div className="getStarted-form-field">
                        <label>How can we help</label>
                        <textarea name="message" placeholder="Please let us know your requirements" onChange={onChange} />
                    </div>

                    <button>Submit</button>
                </form>
            </section>
        </main>
    )
}
