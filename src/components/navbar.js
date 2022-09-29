// import { Link } from "react-router-dom";
import "../css/navbar.css";
import React from "react";


const Navbar = () => {
 
    return ( 

<div className="navbar">
<div className="home">
        <a href="#Home">
          <p>Home</p>
        </a>
        </div>

        <div className="about">
        <a href="#About">
          <p>About Me</p>
        </a>
        </div>

        <div className="projects">
        <a href="#Projects">
          <p>Projects</p>
        </a>
        </div>
</div>
    
    );
}
 
export default Navbar ;