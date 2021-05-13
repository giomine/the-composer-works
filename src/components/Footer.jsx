import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src="assets/IconsLogo/logo_footer.svg" alt="logo" />

                <div className="footer-nav">
                <ul>
                    <Link to="/">About</Link>
                    <Link to="/">Composers</Link>
                    <Link to="/">Shows</Link>
                    <Link to="/">Clients</Link>
                    <Link to="/">News</Link>
                    <Link to="/">Contact</Link>
                </ul>
                </div>
            </div>

            

            <div className="footer-socials">
                <div className="social">
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img src="assets/IconsLogo/Facebook.svg" alt="facebook" /></a>
                </div>
                <div className="social">
                    <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><img src="assets/IconsLogo/Linkedin.svg" alt="linkedin" /></a>
                </div>
                <div className="social">
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><img src="assets/IconsLogo/Twitter.svg" alt="twitter" /></a>
                </div>
            </div>

            <div className="contact-info">
                <p>Suite 7, Washington Centre, MediaCityUK, 112 Broadway, M50 2UW.
                Tel: <strong>0161 826 2316</strong></p>
                <p className="copyright">Copyright of The Composer Works Limited. Registered in England and Wales. No. 7671153.</p>
            </div>

        </div>
    )
}

export default Footer;