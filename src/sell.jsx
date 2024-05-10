import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sell.css';
import logo from './images/logo-white.png';

function Sell() {
    const [signupVisible, setSignupVisible] = useState(false);
    const [navbarVisible, setNavbarVisible] = useState(false);

    useEffect(() => {
        // Add event listener to toggle navbar
        const toggleNavbar = () => {
            setNavbarVisible(!navbarVisible);
        };
        const sidebarIcon = document.getElementById("sidebarsell-icon");
        if (sidebarIcon) {
            sidebarIcon.addEventListener("click", toggleNavbar);
        }
    
        // Remove event listener on component unmount
        return () => {
            if (sidebarIcon) {
                sidebarIcon.removeEventListener("click", toggleNavbar);
            }
        };
    }, [navbarVisible]);
    

    const toggleSignup = () => {
        setSignupVisible(!signupVisible);
    };

    return (
            <body>
                <header id='headsell'>
                    <img src={logo} alt="Your Logo" id="logosell" />
                    <div id="search-barsell">
                        <input type="text" placeholder="Search for properties..." id="search-inputsell" />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <div id="sidebarsell-icon">
                        <i className="fas fa-home"></i>
                    </div>
                </header>

                <div id="navbarsell" className={navbarVisible ? "show" : ""}>
                    <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/buy">Buy</Link></li>
                         <li><Link to="/rent">Rent</Link></li>
                         <li><Link to="/sell">Sell</Link></li>
                         <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div id="headingsell">
                    <h2>Sell your properties</h2>
                </div>

                <button className="signup-button" onClick={toggleSignup}>Sign Up</button>

                {signupVisible && (
                    <div className="containersell" id="signupContainer">
                        <div className="signup-form">
                            <span className="close-btn" onClick={toggleSignup}>&times;</span>
                            <h2>Sign Up</h2>
                            <form>
                                <input type="text" placeholder="Username" required />
                                <input type="email" placeholder="Email" required />
                                <input type="password" placeholder="Password" required />
                                <input type="submit" value="Sign Up" />
                            </form>

                            <div className="or-divider"><span>or</span></div>

                            <div className="social-buttons">
                                <button className="social-button">
                                    <i className="fab fa-google"></i>
                                    Continue with Google
                                </button>
                                <button className="social-button">
                                    <i className="fab fa-facebook"></i>
                                    Continue with Facebook
                                </button>
                                <button className="social-button">
                                    <i className="fas fa-user"></i>
                                    Continue with Apple
                                </button>
                            </div>
                            <div className="email-link">
                                <p>Don't want to sign up with social media? <a href="#">Email me a Link</a></p>
                            </div>
                        </div>
                    </div>
                )}
            </body>
    );
}

export default Sell;

