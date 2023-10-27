import "./Main.css";
import React from "react";
import image from "../assets/images/main-image.jpg";

function Main() {
    return (
        <>
            <div className="main">
                <div className="content">
                    <h2>Welcome to my World</h2>
                    <p>
                    I'm a dedicated web developer, driven by a deep passion <br/>
                    for crafting exceptional online experiences.<br/> 
                    With a keen eye for design and a love for writing efficient and clean code, <br/>  
                    I find immense satisfaction in the ever-evolving world of web development. <br/>
                    Beyond the digital realm, I'm an avid fan of hockey, <br/>
                    spending my time cheering for my favorite team (The Dallas Stars) <br/>
                    and appreciating the skill and intensity of the sport. <br/> 
                    Music is another essential part of my life, <br/>
                    with its melodies and rhythms providing the soundtrack to my daily endeavors. <br/>
                    In my downtime, you'll often find me indulging in a variety of movies, <br/>
                    as storytelling and cinematography hold a special place in my heart. These interests, <br/>
                    combined with my dedication to web development, <br/>
                    shape me into a well-rounded individual, <br/>
                    constantly seeking inspiration from various sources <br/>
                    to bring creativity and innovation to every project I undertake.
                    </p>
                </div>
                <div className="image">
                    <img src={image} alt="coding" className="responsive-main" />
                </div>
            </div>
        </>
    );
}

export default Main;