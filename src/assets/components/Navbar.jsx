import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div>
                <h1>sammidev87</h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/certificates">Certificates</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;