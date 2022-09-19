import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
    return ( <div>
<div className="navbar">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/About">
          <p>About</p>
        </Link>
</div>
    </div> );
}
 
export default Navbar ;