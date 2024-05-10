import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './rent.css';
import logo from './images/logo-white.png';
import home2 from './images/home2.jpg'; 
import apartment1 from './images/apartment-1.jpg';
import apartment2 from './images/apartment-2.jpg';
import apartment3 from './images/apartment-3.jpg';
import apartment4 from './images/apartment-4.jpg';



function Rent() {
    useEffect(() => {
        const searchBarr = document.getElementById("search-inputr");
        searchBarr.focus();
        searchBarr.classList.add("active");
    }, []);

    const toggleNavbar = () => {
        const navbarr = document.getElementById("navbarr");
        navbarr.classList.toggle("show");
    };

    const toggleSearchBar = () => {
        const searchBarr = document.getElementById("search-inputr");
        searchBarr.classList.toggle("active");
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
        <>
            <header id="headr">
                <img src={logo} alt="Your Logo" id="logor" />

                <div id="search-barr">
                    <input
                        type="text"
                        placeholder="Search for properties..."
                        id="search-inputr"
                        onFocus={toggleSearchBar}
                    />
                    {/* <button><FontAwesomeIcon icon={faSearch} /></button> */}
                </div>

                <div id="sidebarr-icon" onClick={toggleNavbar}>
                    {/* <FontAwesomeIcon icon={faHome} /> */}
                </div>
            </header>

            <div id="navbarr">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/buy">Buy</Link></li>
                    <li><Link to="/rent">Rent</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div id="headingrent">
                <h2>Rent listed properties</h2>
            </div>

            <div id="sidebarr" className="sidebarr-ani">
                <h3>Filters</h3>
                <div className="filter">
                    <label htmlFor="land">Land Area:</label>
                    <br />
                    <input
                        type="range"
                        id="land"
                        name="land"
                        min="0"
                        max="1000"
                        step="10"
                        onInput={(e) => updateLandValue(e.target.value)}
                    />
                    <span id="landValue">0 sqft</span>
                </div>
                <div className="filter">

                    <label htmlFor="squareFeet">Square Feet:</label>
                    <br />
                    <input
                        type="range"
                        id="squareFeet"
                        name="squareFeet"
                        min="0"
                        max="5000"
                        step="100"
                        onInput={(e) => updateSquareFeetValue(e.target.value)}
                    />
                    <span id="squareFeetValue">0 sqft</span>
                </div>
                <div className="filter">

                    <label htmlFor="priceRange">Price Range:</label>
                    <br />
                    <input
                        type="range"
                        id="priceRange"
                        name="priceRange"
                        min="0"
                        max="1000000"
                        step="10000"
                        onInput={(e) => updatePriceRangeValue(e.target.value)}
                    />
                    <span id="priceRangeValue">$0 - $1,000,000</span>
                    <br />
                </div>
                <div className="filter">
                    <label htmlFor="bedroomsRange">Bedrooms:</label>
                    <br />
                    <input
                        type="range"
                        id="bedroomsRange"
                        name="bedrooms"
                        min="0"
                        max="10"
                        step="1"
                        onInput={(e) => updateBedrooms(e.target.value)}
                    />
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
                    <img src={home2} alt="Property 1" />
                    <div className="property-card-content">
                        <h2>Apartment</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $500,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>

                <div className="property-card">
                    <img src={apartment1} alt="Property 2" />
                    <div className="property-card-content">
                        <h2>Luxury Apartment</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $700,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>

                <div className="property-card">
                    <img src={apartment2} alt="Property 2" />
                    <div className="property-card-content">
                        <h2>Deluxe Apartment</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $700,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>

                <div className="property-card">
                    <img src={apartment3} alt="Property 2" />
                    <div className="property-card-content">
                        <h2>3 Bed Apartment</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $700,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>

                <div className="property-card">
                    <img src={apartment4} alt="Property 2" />
                    <div className="property-card-content">
                        <h2>2 bed Apartment</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien eu mauris lacinia interdum.</p>
                        <p>Price: $700,000</p>
                        <button className="btn">View Details</button>
                    </div>
                </div>
            </div>

            <footer>
                <div className="footer-container">
                    <div className="logor">
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
                        {/* <ul>
                            <li className="facebook"><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                            <li className="instagram"><a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                        </ul> */}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Rent;
