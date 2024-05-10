import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './buy.css';
import logo from './images/logo-white.png';
import home1 from './images/home1.jpg'; 
import home3 from './images/home3.jpg';
import home4 from './images/home4.jpg';
import home6 from './images/home6.jpg';
import home7 from './images/home7.jpg';
import home8 from './images/home8.jpg';

function Buy() {
    useEffect(() => {
        focusSearchInput();
    }, []);

    const toggleSearchBar = () => {
        document.getElementById("search-inputs").classList.toggle("active");
    };

    const focusSearchInput = () => {
        document.getElementById("search-inputs").focus();
        document.getElementById("search-inputs").classList.add("active");
    };

    const updateLandValue = (value) => {
        document.getElementById("landValue").textContent = value + " sqft";
    };

    const updateSquareFeetValue = (value) => {
        document.getElementById("squareFeetValue").textContent = value + " sqft";
    };

    const updatePriceRangeValue = (value) => {
        document.getElementById("priceRangeValue").textContent = `$0 - $${value}`;
    };

    const updateBedrooms = (value) => {
        document.getElementById("bedroomsValue").textContent = value;
    };

    return (
        <div>
            <header id="headb">
                <img src={logo} alt="Your Logo" id="logos" />
                <div id="search-bars">
                    <input type="text" placeholder="Search for properties..." id="search-inputs" onFocus={toggleSearchBar} />
                    
                </div>
            </header>
            <div id="navbars">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/buy">Buy</Link></li>
                    <li><Link to="/rent">Rent</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div id="headingbuy">
                <h2>Buy listed properties</h2>
            </div>
            <div id="sidebars" className="sidebar-ani">
                <h3>Filters</h3>
                <div className="filter">
                    <label htmlFor="land">Land Area:</label>
                    <br />
                    <input type="range" id="land" name="land" min="0" max="1000" step="10" onInput={(e) => updateLandValue(e.target.value)} />
                    <span id="landValue">0 sqft</span>
                </div>
                <div className="filter">
                    <label htmlFor="squareFeet">Square Feet:</label>
                    <br />
                    <input type="range" id="squareFeet" name="squareFeet" min="0" max="5000" step="100" onInput={(e) => updateSquareFeetValue(e.target.value)} />
                    <span id="squareFeetValue">0 sqft</span>
                </div>
                <div className="filter">
                    <label htmlFor="priceRange">Price Range:</label>
                    <br />
                    <input type="range" id="priceRange" name="priceRange" min="0" max="1000000" step="10000" onInput={(e) => updatePriceRangeValue(e.target.value)} />
                    <span id="priceRangeValue">$0 - $1,000,000</span>
                    <br />
                </div>
                <div className="filter">
                    <label htmlFor="bedroomsRange">Bedrooms:</label>
                    <br />
                    <input type="range" id="bedroomsRange" name="bedrooms" min="0" max="10" step="1" onInput={(e) => updateBedrooms(e.target.value)} />
                    <span id="bedroomsValue">0</span>
                    <br />
                </div>
                <div className="filter">
                    <label htmlFor="location">Location:</label>
                    <select id="location" name="location">
                        <option value="city">City</option>
                        <option value="suburb">Suburb</option>
                        <option value="rural">Rural</option>
                    </select>
                </div>
                <h3>Property Type</h3>
                <div className="checkbox">
                    <input type="checkbox" id="apartment" name="apartment" />
                    <label htmlFor="apartment">Apartment</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="house" name="house" />
                    <label htmlFor="house">House</label>
                </div>
                <h3>Amenities</h3>
                <div className="checkbox">
                    <input type="checkbox" id="pool" name="pool" />
                    <label htmlFor="pool">Pool</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="garage" name="garage" />
                    <label htmlFor="garage">Garage</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="balcony" name="balcony" />
                    <label htmlFor="balcony">Balcony</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="garden" name="garden" />
                    <label htmlFor="garden">Garden</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="furnished" name="furnished" />
                    <label htmlFor="furnished">Furnished</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="parking-space" name="parking-space" />
                    <label htmlFor="parking-space">Parking Space</label>
                </div>
            </div>
            <div className="container">
                <div className="property-card">
                    <img src={home1} alt="Property 1" />
                    <div className="property-card-content">
                        <h2>Apartment</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $500,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>
                <div className="property-card">
                    <img src={home3} alt="Property 2" />
                    <div className="property-card-content">
                        <h2>Luxury House</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $700,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>
                <div className="property-card">
                    <img src={home4} alt="Property 3" />
                    <div className="property-card-content">
                        <h2>2 Kanal House</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $700,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>
                <div className="property-card">
                    <img src={home6} alt="Property 4" />
                    <div className="property-card-content">
                        <h2>Exquisite Home</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $700,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>
                <div className="property-card">
                    <img src={home7} alt="Property 5" />
                    <div className="property-card-content">
                        <h2>Comfortable Home</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $700,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>
                <div className="property-card">
                    <img src={home8} alt="Property 6" />
                    <div className="property-card-content">
                        <h2>Luxury House</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $700,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-container">
                    <div className="logos">
                        <img src={logo} alt="Logos" />
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
                            <li><Link to="/contact">Contact Us</Link></li>
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

export default Buy;

