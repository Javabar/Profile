import "../css/projects.css";
import codestation from "../images/codestation.jpg";
import { BsGithub, BsFillPlayCircleFill } from "react-icons/bs";

const Project = () => {
    return ( 
        <div>
        <h1>Projects</h1>
        {/* <div className="container portfolio_container1">
            </div> */}
        <h3 className="title2">Code Station</h3>
        <img className="img1" src={codestation} alt="Code Station site" />
        <p>MERN Stack Code Station APP</p>
            <a className="btn1" href="https://github.com/Javabar/CN-CodeStation-38" target="blank" rel="noreferrer"><BsGithub className="project-icon" /></a>
            <a className="btn1" href="https://cn-codstation-38.netlify.app/" target="_blank" rel="noreferrer" ><BsFillPlayCircleFill className="project-icon" /></a>
        
        </div>
     );
}
 
export default Project;