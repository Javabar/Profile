import React from "react";
import "../css/projects.css"
import { BsGithub, BsFillPlayCircleFill } from "react-icons/bs";


const OtherProjects = (props) => {
    return (
        <div className={"other-project"}>
            <div className={"other-project-text"}>
                <div className={"other-project-text-box"}>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <p className={"other-skills-text"}>{props.skills}</p>
                </div>
                <div className={"other-project-link"}>
                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                    <BsGithub className="icon1" />
                    </a>
                    <a href={props.website} target="_blank" rel="noopener noreferrer">
                    <BsFillPlayCircleFill className="icon1" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default OtherProjects;