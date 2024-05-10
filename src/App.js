import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import Buy from './buy';
import Rent from './rent';
import Sell from './sell';
import Contact from './contact';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


