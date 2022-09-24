import "../css/projects.css";
import React from "react";
import ProjectCodeStation from "./projectCodeStation";
import ProjectWebsiteClone from "./projectWebsiteClone";
import codestation from "../images/codestation.jpg";
import websiteClone from "../images/websiteClone.jpg";


const Project = () => {
    return ( 
        <div>
        <h1>Projects</h1>

        <ProjectCodeStation
                    image={codestation}
                    title="Code Station"
                    desc="Code Station is a full-stack MERN application for the coding community. Users can signup or login to browse latest coding opportunities, get closer to the coding community, and log your interest so you never miss out."
                    skills="JavaScript, React.js, MongoDB &amp; Mongoose, Express, Node.js"
                    github="https://github.com/Javabar/CN-CodeStation-38"
                    website="https://cn-codstation-38.netlify.app/"
                />

        <ProjectWebsiteClone
                    image={websiteClone}
                    title="Website Clone"
                    desc="Cloning Krunch's website design as identical as possible, using only HTML and CSS. This was one of my first projects during the Code Nation bootcamp."
                    skills="JavaScript, React.js, MongoDB &amp; Mongoose, Express, Node.js"
                    github="https://github.com/Javabar/Website-Clone"
                    website="https://website-clone-6e0cd4.netlify.app/"
                    
                />
       
            
        </div>
     );
}
 
export default Project;