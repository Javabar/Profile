import React from "react";
import "../css/projects.css"
import { BsGithub, BsFillPlayCircleFill } from "react-icons/bs";


const ProjectWebsiteClone = (props) => {
    return (
        <div className="project">
            <div className="project-img">
                <img src={props.image} alt="" />
            </div>
            <div className="project-text">
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <small className="skills-text">{props.skills}</small>
                </div>
                <div className="project-link">
                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                    <BsGithub className="icon" />
                        </a>
                    <a href={props.website} target="_blank" rel="noopener noreferrer">
                    <BsFillPlayCircleFill className="icon" />
                       </a>
                </div>
            </div>
            
        </div>
    );
}

export default ProjectWebsiteClone;