import React from 'react';
import './con.css'; 
import { Link } from 'react-router-dom';
import logo from './images/logo-white.png';
import blueprint from './images/blueprint.jpg';

function Contact() {
    const toggleNavbar = () => {
        document.getElementById("navbarcon").classList.toggle("show");
    };

    return (
        <div>
            <header id="headcon">
                <img src={logo} alt="Your Logo" id="logocon" />

                <div id="searchcon-bar">
                    <input type="text" placeholder="Search for properties..." id="searchcon-input" />
                </div>

                <div id="sidebarcon-icon" onClick={() => toggleNavbar()}>
                </div>
            </header>

            <div id="navbarcon">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/buy">Buy</Link></li>
                    <li><Link to="/rent">Rent</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div id="headingcon">
                <h2>Contact Us</h2>
            </div>

            <div className="containercon">
                <div className="contact-form">
                    <form action="#" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-number">Contact Number:</label>
                            <input type="tel" id="contact-number" name="contact-number" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="contact-info">
                    <div className="info-item">
                        <h3>Email</h3>
                        <p>support@listed.com</p>
                    </div>
                    <div className="info-item">
                        <h3>Phone Number</h3>
                        <p>+92-305-905-1234</p>
                    </div>
                    <div className="info-item">
                        <h3>Address</h3>
                        <p>Main Bluearea, Black Horse Plaza, Islamabad</p>
                    </div>
                </div>

                <div className="image-container">
                    <img src={blueprint} alt="Your Image" />
                </div>
            </div>

            <footer>
                <div className="footer-container">
                    <div className="logocon">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="about-us">
                        <h4>About Us</h4>
                        <p>Buy, Sell, and Rent the properties that match your requirements</p>
                    </div>
                    <div className="menu">
                        <h4>Menu</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/buy">Buy</Link></li>
                            <li><Link to="/rent">Rent</Link></li>
                            <li><Link to="/sell">Sell</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>Contact Info</h4>
                        <p>Main Bluearea, Black Horse Plaza, Islamabad</p>
                        <p>support@listed.com</p>
                        <p>+92-305-905-1234</p>
                    </div>
                    <div className="social-links">
                        <h4>Follow Us</h4>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
