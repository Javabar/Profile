import { Link } from "react-router-dom";


const Navbar = () => {
    return ( <div>
<div>
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