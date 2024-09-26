import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './Components/Body';
import Details from './Components/Details';
import Search from './Components/Search';
import Navbar from './Components/Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/search" element={<Search />} />
                    <Route path="/" element={<Body />} />
                    <Route path="/details/:cca3" element={<Details />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
