import "../css/projects.css";
import React from "react";
import ProjectCodeStation from "../components/projectCodeStation";
import ProjectWebsiteClone from "../components/projectWebsiteClone";
import codestation from "../images/codestation.jpg";
import websiteClone from "../images/websiteClone.jpg";
import OtherProjects from "../components/otherProjects";

import { motion } from "framer-motion";



const Projects = () => {
    return ( 
        <motion.section 
            id="Portfolio" 
            className="portfolio"
        >
        <div>
           <div className="portfolio">
        <h1>Projects</h1>
<h2 className="subtitle">Featured Projects</h2>
<div className={"projects1"}>
        <ProjectCodeStation
                    image={codestation}
                    title="Code Station"
                    desc="Code Station is a full-stack MERN application for the coding community. Users can signup or login to browse latest coding opportunities, get closer to the coding community, and log your interest so you never miss out."
                    skills="JavaScript, React.js, CSS, MongoDB, Mongoose, Express &amp; Node.js"
                    github="https://github.com/Javabar/CN-CodeStation-38"
                    website="https://cn-codstation-38.netlify.app/"
                />

        <ProjectWebsiteClone
                    image={websiteClone}
                    title="Website Clone"
                    desc="Cloning Krunch's website design as identical as possible, using only HTML and CSS. This was one of my first projects during the Code Nation bootcamp."
                    skills="HTML &amp; CSS"
                    github="https://github.com/Javabar/Website-Clone"
                    website="https://website-clone-6e0cd4.netlify.app/"
                />
       </div>

        <h2 className="subtitle">Other Projects</h2>
        <div className="projects2">
       <OtherProjects
                    title="REST API"
                    desc="A simple REST API with two databases."
                    skills="MongoDB, Mongoose, Express &amp; JavaScript"
                    github="https://github.com/Javabar/Rest-API"
                />

        <OtherProjects
                    title="Cats4Life"
                    desc="This was a small group project where we created a react.js application and generated API's."
                    skills="GitHub, React.js, Rest API &amp; netlify"
                    github="https://github.com/Javabar/CN-M38-cats4life"
                    website="https://cn-m38-desk3-cats4life.netlify.app/"
                />        

<OtherProjects
                    title="Javascript Fundamentals"
                    desc="Showing the key skills learnt using Javascript"
                    skills="Javascript"
                    github="https://github.com/Javabar/Javascript-Fundamentals"
                    // website=""
                />               
        </div>
        </div>
        </div> 
        </motion.section>
     );
}
 
export default Projects;