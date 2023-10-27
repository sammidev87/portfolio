import "./Navbar.css";
import { Link } from "react-router-dom";
import { About, Contact, Education, Home } from "../pages";
import sd87 from "../assets/images/sd87.png";
import { useState } from "react";
import { MdOutlineMenuOpen, MdOutlineClose } from "react-icons/md";

function Navbar() {
    const [link, setLink] = useState("");
    const [icon, setIcon] = useState(false);
    const icons = [<MdOutlineMenuOpen />, <MdOutlineClose />];
    const toggleIcon = (e) => {
        setIcon(!icon);
    }
    const toggleLink = (e) => {
        setLink(e.currentTarget.id);
    };
    return (
        <>
            <nav>
                <Link to={Home} id="home" className={link === "home" ? "active" : ""} onClick={toggleLink}><img src={sd87} alt="sd87 logo" className="responsive-navbar" /></Link>
                <div>
                    <ul id="navbar" className={icon === true ? "active" : ""}>
                        <li><Link to={Home} id="home" className={link === "home" ? "active" : ""} onClick={toggleLink}>Home</Link></li>
                        <li><Link to={About} id="about" className={link === "about" ? "active" : ""} onClick={toggleLink}>About</Link></li>
                        <li><Link to={Education} id="education" className={link === "education" ? "active" : ""} onClick={toggleLink}>Education</Link></li>
                        <li><Link to={Contact} id="contact" className={link === "contact" ? "active" : ""} onClick={toggleLink}>Contact</Link></li>
                    </ul>
                </div>
                <div id="mobile">
                    <i id="icon" className="" onClick={toggleIcon}>{icon === true ? icons[1] : icons[0]}</i>
                </div>
            </nav>
        </>
    );
}

export default Navbar;