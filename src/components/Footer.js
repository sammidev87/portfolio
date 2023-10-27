import "./Footer.css";
import React from "react";
import logo from "../assets/images/logo.png";

function Footer() {
    return (
        <>
            <footer>
                <div className="logo">
                    <img src={logo} alt="logo" className="responsive-footer" id="logo"/>
                </div>
                <div className="copyright">
                    <p id="copyright">&copy; sammidev87 2023</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;