import React from "react";
import { BsGithub, BsFillPlayCircleFill } from "react-icons/bs";


const ProjectCodeStation = (props) => {
    return (
        <div>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <p><span>{props.skills}</span></p>
                </div>
                <div>
                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                    <BsGithub className="icon" />
                    </a>
                    <a href={props.website} target="_blank" rel="noopener noreferrer">
                    <BsFillPlayCircleFill className="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ProjectCodeStation;