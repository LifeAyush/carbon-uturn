import { useContext, useEffect } from "react"
import "./getStartedForm.css"
import { GetStartedFormContext } from "../../store/GetStartedFormContext"
import blackClose from "../../Assets/Images/close-black.svg"
import whiteClose from "../../Assets/Images/close.png"

export default function GetStartedForm() {
    const handleSubmit = () => { }
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
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="getStarted-form-field">
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>
                    <div className="getStarted-form-flex">
                        <div className="getStarted-form-field">
                            <label>Contact Number</label>
                            <input
                                type="text"
                                placeholder="+91 | Enter your contact"
                            />
                        </div>
                        <div className="getStarted-form-field">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="getStarted-form-field">
                        <label>Company Name</label>
                        <input
                            type="text"
                            placeholder="Enter your company name"
                        />
                    </div>
                    <div className="getStarted-form-field">
                        <label>How can we help</label>
                        <textarea placeholder="Please let us know your requirements" />
                    </div>

                    <button>Submit</button>
                </form>
            </section>
        </main>
    )
}
