import React from "react";

function LandingPage(){
    return(
        <div className="page">
            <div className="landingPageBG">
            </div>

            <div className="hero-text">
                <h1>We are an elite group of <span className="bold">film</span> and <span className="bold">tv composers</span>.</h1>
                <p>FOR CLIENTS LIKE THESE</p>
                <img src={process.env.PUBLIC_URL + "./assets/IconsLogo/Triangle.svg"} alt="logo" />
            </div>

            <div className="clients-section">
                <div className="container container-padding">
                    <div className="row">
                        <div className="col-4 col-lg-2">
                            <img src="Clients/bbc.jpg" alt="bbc" />
                        </div>
                        <div className="col-4 col-lg-2">
                            <img src="Clients/tc.jpg" alt="bbc" />
                        </div>
                        <div className="col-4 col-lg-2">
                            <img src="Clients/nl.jpg" alt="bbc" />
                        </div>
                        <div className="col-4 col-lg-2">
                            <img src="Clients/red.jpg" alt="bbc" />
                        </div>
                        <div className="col-4 col-lg-2">
                            <img src="Clients/citv.jpg" alt="bbc" />
                        </div>
                        <div className="col-4 col-lg-2">
                            <img src="Clients/tinypop.jpg" alt="bbc" />
                        </div>
                    </div>

                </div>
            </div>

            <p className="toggle-clients">SEE ALL</p>
        </div>
    )
}

export default LandingPage;