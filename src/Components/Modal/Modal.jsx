import { useContext } from "react"
import close from "../../Assets/Images/close-black.svg"
import { GetStartedFormContext } from "../../store/GetStartedFormContext"
import styles from "./modal.module.css"

export default function Modal() {

    const { firstVisit, setForm, setFirstVisit } = useContext(GetStartedFormContext)


    const goToContact = () => {
        setFirstVisit(false)
        setForm(true)
    }

    return (
        firstVisit ?
            <div className={styles.modalContainer}>
                <p>We are working on the SaaS Product & eLearning Modules. Watch out for the releases in October onwards. <br /> <span onClick={goToContact} className={styles.modalspan}>Learn more.</span></p>
                <img style={{ cursor: "pointer" }} onClick={() => setFirstVisit(false)} src={close} alt="" />
            </div>
            : <></>
    )
}