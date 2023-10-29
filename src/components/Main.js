import "./Main.css";
import React from "react";
import image from "../assets/images/main-image.jpg";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoGithub } from "react-icons/bi";

function Main() {
    return (
        <>
            <div className="main">
                <div className="image">
                    <img src={image} alt="coding" className="responsive-main" />
                </div>
                <div className="content">
                    <h2>
                        I am Samantha Dale<br/>
                        but you can call me Sammi
                    </h2>
                    <p>
                    I am a front-end web developer.
                    </p>
                    <div className="icons">
                        <BiLogoHtml5 />
                        <BiLogoCss3 />
                        <BiLogoJavascript />
                        <BiLogoReact />
                        <BiLogoGithub />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;