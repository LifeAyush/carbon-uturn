import { useContext } from "react"
import close from "../../Assets/Images/close-black.svg"
import { GetStartedFormContext } from "../../store/GetStartedFormContext"

export default function Modal() {

    const { firstVisit, setForm, setFirstVisit } = useContext(GetStartedFormContext)

    const modalContainer = {
        background: "white",
        borderRadius: "5px",
        position: "fixed",
        zIndex: 100,
        bottom: "5vh",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "50vw",
        padding: "10px",
        display: "flex",
        gap: "5px",
        alignItems: "flex-start",
        border: "2px solid #2EAF7D"
    }

    const modalspan = {
        color: "#2EAF7D",
        cursor: "pointer"
    }

    const goToContact = () => {
        setFirstVisit(false)
        setForm(true)
    }

    return (
        firstVisit ?
            <div style={modalContainer}>
                <p>We are working on the SaaS Product & eLearning Modules. Watch out for the releases in October onwards. <span onClick={goToContact} style={modalspan}>Learn more.</span></p>
                <img style={{ cursor: "pointer" }} onClick={() => setFirstVisit(false)} src={close} alt="" />
            </div>
            : <></>
    )
}