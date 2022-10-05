// import { Link } from "react-router-dom";
import "../css/navbar.css";
import React from "react";


const Navbar = () => {
 
    return ( 

<div className="navbar">

<div className="home">
        <a href="#Home" rel="noreferrer">
          <p>Home</p>
        </a>
      </div>

      <div className="about">
        <a href="#About" rel="noreferrer">
          <p>About</p>
        </a>
      </div>

      <div className="projects">
        <a href="#Projects" rel="noreferrer">
          <p>Projects</p>
        </a>
      </div>

</div>
    
    );
}
 
export default Navbar ;