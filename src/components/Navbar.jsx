import React from "react";
import { Link } from 'react-router-dom';
require('bootstrap');

function Navbar(){
    return(
        <div className="nav-wrapper">
            <nav className="myNav navbar navbar-light navbar-expand-lg">
            <div className="container">
                    <Link to="/" className="navbar-brand"><img src="assets/IconsLogo/logo.svg" alt="logo" /></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                                <div className="center"><Link to="/" className="nav-item nav-link active">About</Link><span className="decorator"></span></div>
                                <div className="center"><Link to="/" className="nav-item nav-link active">Composers</Link><span className="decorator"></span></div>
                                <div className="center"><Link to="/" className="nav-item nav-link active">Shows</Link><span className="decorator"></span></div>
                                <div className="center"><Link to="/" className="nav-item nav-link active">Clients</Link><span className="decorator"></span></div>
                                <div className="center"><Link to="/" className="nav-item nav-link active">News</Link><span className="decorator"></span></div>
                                <Link to="/" className="nav-item nav-link active contact-us">Contact Us</Link>
                        </ul>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;