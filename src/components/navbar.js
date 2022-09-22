import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
    return ( <div>
<div className="navbar">
        <div className="home">
        <Link to="/">
          <p>Home</p>
        </Link>
        </div>
        <div className="about">
        <Link to="/About">
          <p>About Me</p>
        </Link>
        </div>
        <div className="projects">
        <Link to="/Projects">
          <p>Projects</p>
        </Link>
        </div>
</div>
    </div> );
}
 
export default Navbar ;