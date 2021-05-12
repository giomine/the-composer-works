import React from "react";
import Navbar from "./Navbar";

function LandingPage(){
    return(
        <div className="page">
            <div className="landingPageBG">
                <Navbar />
            </div>

            <div className="hero-text">
                <h1>We are an elite group of <span className="bold">film</span> and <span className="bold">tv composers</span>.</h1>
                <p>FOR CLIENTS LIKE THESE</p>
                <img src={process.env.PUBLIC_URL + "./assets/IconsLogo/Triangle.svg"} alt="logo" />
            </div>
        </div>
    )
}

export default LandingPage;