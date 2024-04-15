import React from "react"
import facebook from "../../Assets/Images/facebook.svg"
import linkedIn from "../../Assets/Images/linkedIn.svg"
import instagram from "../../Assets/Images/instagram.svg"
import twitter from "../../Assets/Images/twitter.svg"
import bg from "../../Assets/Images/teamCardContentBG.png"

const TeamCard = ({ data }) => {
    return (
        <div className="teamcard">
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
                        <a href={data.links[0]} target="_blank">
                            <img
                                src={facebook}
                                alt="Facebook"
                                className="team-card-icon"
                            />
                        </a>
                        <a href={data.links[1]} target="_blank">
                            <img
                                src={linkedIn}
                                alt="LinkedIn"
                                className="team-card-icon"
                            />
                        </a>
                        <a href={data.links[2]} target="_blank">
                            <img
                                src={instagram}
                                alt="Instagram"
                                className="team-card-icon"
                            />
                        </a>
                        <a href={data.links[3]} target="_blank">
                            <img
                                src={twitter}
                                alt="Twitter"
                                className="team-card-icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
