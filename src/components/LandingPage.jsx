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

            <div className="grid">
                <div className="clients">
                    <div className="client-icon">
                        <img src="Clients/bbc.jpg" alt="bbc" />
                    </div>
                </div>
                <div className="clients">
                    <div className="client-icon">
                        <img src="Clients/tc.jpg" alt="bbc" />
                    </div>
                </div>
                <div className="clients">
                    <div className="client-icon">
                        <img src="Clients/nl.jpg" alt="bbc" />
                    </div>
                </div>
                <div className="clients">
                    <div className="client-icon">
                        <img src="Clients/red.jpg" alt="bbc" />
                    </div>
                </div>
                <div className="clients">
                    <div className="client-icon">
                        <img src="Clients/citv.jpg" alt="bbc" />
                    </div>
                </div>
                <div className="clients">
                    <div className="client-icon">
                        <img src="Clients/tinypop.jpg" alt="bbc" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;