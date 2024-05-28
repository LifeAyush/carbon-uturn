import React from "react"
import facebook from "../../Assets/Images/fb.svg"
import linkedIn from "../../Assets/Images/linkedIn.svg"
import mail from "../../Assets/Images/mail.svg"
import twitter from "../../Assets/Images/twitter.svg"
import bg from "../../Assets/Images/teamCardContentBG.png"

const TeamCard = ({ data }) => {
    const handleClick = (e) => {
        let curr = e.target
        while (curr.className !== "teamcard") {
            curr = curr.parentNode
        }
        const backDetails = curr.querySelector(".teamcard-click")
        const frontDetails = curr.querySelector(".team-card-flex")
        frontDetails?.classList.toggle("toggle-visibility")
        backDetails?.classList.toggle("toggle-translate")
    }
    return (
        <div className="teamcard" onClick={handleClick}>
            <div
                className="team-card-main"
                style={{
                    background: `url(${data.image})`,
                }}
            >
                <div
                    className="team-card-flex"
                    style={{
                        background: `linear-gradient(rgba(23, 22, 22, 0.6), rgba(82,80,80,0.6)), url(${bg})`,
                    }}
                >
                    <div className="team-card-title">{data.name}</div>
                    <hr className="team-card-hr" />
                    <div className="team-card-title-flex">
                        <div className="team-card-sub-title">{data.title1}</div>
                        <div className="team-card-sub-title">{data.title2}</div>
                    </div>
                    <div className="team-card-links">
                        {data.links.twitter && (
                            <a
                                href={data.links.twitter}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={twitter}
                                    alt="Twitter"
                                    className="team-card-icon"
                                />
                            </a>
                        )}
                        {data.links.fb && (
                            <a
                                href={data.links.fb}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={facebook}
                                    alt="Facebook"
                                    className="team-card-icon"
                                />
                            </a>
                        )}

                        {data.links.linkedin && (
                            <a
                                href={data.links.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={linkedIn}
                                    alt="LinkedIn"
                                    className="team-card-icon"
                                />
                            </a>
                        )}

                        {data.links.mail && (
                            <a
                                href={data.links.mail}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={mail}
                                    alt="Mail"
                                    className="team-card-icon"
                                />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div
                className="teamcard-click"
                style={{
                    background: `linear-gradient(rgba(23, 22, 22, 0.9), rgba(82,80,80,0.9)), url(${bg})`,
                }}
            >
                <div className="team-card-title">{data.name}</div>
                <div className="team-card-sub-title">{data.vertical}</div>
                <p className="team-card-para">{data.para}</p>
            </div>
        </div>
    )
}

export default TeamCard
