
import {Link} from "react-router-dom";
import '../NavBar/Navbar.css';

function Navbar (props){

    return(
        <nav className="nav">
            <Link className="home" to="/">Home</Link>
            <Link className= "moreDetails" to="/city/:id">More Details</Link>
            </nav>
    )
}






export default Navbar ;
