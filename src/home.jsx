import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import home1 from './images/home1.jpg'; 
import home2 from './images/home2.jpg';
import home3 from './images/home3.jpg';
import home5 from './images/home5.jpg';
import logo from './images/logo-white.png';

function Home() {
    const [isSearchBarVisible, setSearchBarVisible] = useState(false);

    function toggleNavbar() {
        document.getElementById("navbar").classList.toggle("show");
    }
   

    function toggleSearchBar() {
        setSearchBarVisible(!isSearchBarVisible);
    }

    function handleScroll(event) {
        if (event.deltaY > 0) {
            // Scrolling down
            setSearchBarVisible(true);
        } else {
            // Scrolling up
            setSearchBarVisible(false);
        }
    }

    return (
        <div>
            <div className="carousel-container">
                <div className="carousel">
                    <div className="slide">
                        <img src={home5} alt="Image 1" />
                        <div className="text">Find Listed Properties, that suit your needs!</div>
                    </div>
                    <div className="slide">
                        <img src={home2} alt="Image 2" />
                        <div className="text">Get in contact with our Agents</div>
                    </div>
                    <div className="slide">
                        <img src={home1} alt="Image 2" />
                        <div className="text">Sell your Properties</div>
                    </div>
                    <div className="slide">
                        <img src={home3} alt="Image 2" />
                        <div className="text">Rent out properties that you find appealing</div>
                    </div>
                </div>
            </div>

            <header>
                <div id="search-barhome" className={`search-barhome ${isSearchBarVisible ? 'show' : ''}`}>
                    <input type="text" placeholder="Search for properties..." />
                    <button onClick={toggleSearchBar}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                <img src={logo} alt="Your Logo" id="logo" />

                <div id="sidebar-icon" onClick={toggleNavbar}>
                    <i className="fas fa-home"></i>
                </div>
            </header>

            <div id="navbar" className="hidden">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/buy">Buy</Link></li>
                    <li><Link to="/rent">Rent</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;